import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import axios from 'axios';

const Slide = props => (
      
    <article>
        <div>
            
            <img src={"./uploads/images/" + props.path}/>
        </div>
    </article> 
     
)

function Gallery(){
    const [photos, setPhotos] = useState(null);
    const [counter, setCounter] = useState(0);
    const [loading, setLoading] = useState(false);

  
    function slideBuilder( ){
       
        if(photos){
            return <Slide path= {photos[counter].imgPath}/>
        }
        
    }   


    useEffect(() => {
        async function getPhotos(){
         setLoading(true);
         await axios.get('http://localhost:5001/getPhotos').then(res => {
             setPhotos(res.data);
             setLoading(false);
             console.log("hre " + JSON.stringify(res.data));

        });
       
        }
        getPhotos();
    },[]);

    useEffect(() => {
        const timer = setInterval(() => {
            if(photos && !loading){
                if(counter >= photos.length - 1){
                    setCounter(0);
                }
                else{
                    setCounter( counter + 1);
                }
    
               
            }
        }, 5000);
                   
        return () => clearInterval(timer);
      });
 
  
 

 
    return (
                    <div>
                        <h1>Gallery</h1>
                        { loading ? <div><p>Loading . . .</p></div> :  slideBuilder( )  }
                    </div>
                );
 

}

export default Gallery;