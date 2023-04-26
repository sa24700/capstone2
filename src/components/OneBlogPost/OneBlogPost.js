
import axios from 'axios'; 
import React, {Component, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
 
 
const  OneBlogPost =   ( ) => {
 
     const {key} = useParams();
    
     const [title, setTitle] = useState(null);
     const [author, setAuthor] = useState(null);
     const [content, setContent] = useState(null);
     const [downloads, setDownloads] = useState([]);

      useEffect( () => {
            async function getPostDetails(){
                try{
             
                    await axios.get('http://localhost:5001/getPost/'+key).then(res=>{
                     
 
                    setTitle( res.data[0].title);
                    setAuthor( res.data[0].author);
                    setContent( res.data[0].content);
             
                    setDownloads(res.data[0].files.toString().split(","));
                  });
                   
              }
              catch(err){
                  console.log(err);
              }
            }
            getPostDetails()
       
    }, []) 
    
    
    function showFiles(){
        if(downloads.length === 0) return;

        console.log("downloads " + downloads);
        return downloads.map((element,key) =>{
            console.log("element " + element);
            return <li><Link to={"http://localhost:5001/getFile/"+element} className="red bold b" key={key} download>{element}</Link></li>
        });
    }
        return (
         
            <div>
                 
                <article className="  w-50 pa0 ml-auto mr-auto mv2  bg-blue   ba bw2 b--dark-blue">
            
                <h2>{ title}</h2>
                <p>by: {author}</p>
        
                <div className='h-100 mb0 bt bw2 b--dark-blue bg-light-blue   ' >
                <p  className='tl pa3 '  style={{whiteSpace:'pre-wrap'}}>{content}</p>   
                </div>
                <div>
                    <ul>
                    {showFiles()};
                    </ul>
                </div>
                </article>
            </div>
        )
        
     
}

export default  OneBlogPost ;