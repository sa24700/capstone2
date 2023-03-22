
import axios from 'axios'; 
import React, {Component, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
 
 
const  OneBlogPost =   ( ) => {
 
     const {key} = useParams();
    
     const [title, setTitle] = useState(null);
     const [author, setAuthor] = useState(null);
     const [content, setContent] = useState(null);
      useEffect( () => {
            async function getPostDetails(){
                try{
             
                    await axios.get('http://localhost:5001/getPost/'+key).then(res=>{
                     
                      
                    setTitle(JSON.stringify(res.data[0].title));
                    setAuthor(JSON.stringify(res.data[0].author));
                    setContent(JSON.stringify(res.data[0].content));
                  });
                   
              }
              catch(err){
                  console.log(err);
              }
            }
            getPostDetails()
       
    }, []) 
     
          
        return (
         
            <div>
                 
                <article className="  w-50 pa0 ml-auto mr-auto mv2  bg-blue   ba bw2 b--dark-blue">
            
                <h2>{ title}</h2>
                <p>by: {author}</p>
        
                <div className='h-100 mb0 bt bw2 b--dark-blue bg-light-blue' >
                <p>{content}</p>   
                </div>
                </article>
            </div>
        )
        
     
}

export default  OneBlogPost ;