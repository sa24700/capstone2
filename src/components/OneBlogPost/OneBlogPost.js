
import axios from 'axios'; 
import React, {Component, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
 
 
const  OneBlogPost =   ( ) => {
 
     const {key} = useParams();
     const [allPosts, setAllPosts] = useState(null);
     const [loading, setLoading] = useState(true);
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
            async function getAllPosts(){
                try{
             
                    await axios.get('http://localhost:5001/showAllBlogPosts').then(res=>{
                     
                    setAllPosts(res.data.reverse());
                    console.log("data all posts " + res.data);
                    setLoading(false);
                  });
                   
              }
              catch(err){
                  console.log(err);
              }
            }

            getPostDetails()
            getAllPosts();
    }, []) 
    
    function createSideBar(){
        if(!allPosts) return;
        
        return allPosts.map((element) => {

                
                return( 
                    <Link to={'/blog/'+element._id}className="link dim mb2 pa2 bg-white">
                    <div className='  bw2 ba b-red'>
                    <h3>{element.title}</h3>
                    <p style={{whiteSpace:'pre-wrap'}}>{element.content.slice(0,600)}</p>
                    </div>
                    </Link>
                ) 
            })

        
    }
    
    function showFiles(){
        if(downloads.length === 0) return;
        return downloads.map((element,key) =>{
            return <li><Link to={"http://localhost:5001/getFile/"+element} className=" bold f4 fw6 red link:visited {white }b" key={key} download>{element}</Link></li>
        });
    }
        return (
         
            <div className='flex flex-row  h6 absolute w-100 fl'>
                  <aside className='flex flex-column ma2  w-25 h4'>{createSideBar()}</aside>
                <article className="  w-50 pa0 ml-auto mr-auto mv2  relative-absolute bg-white ">
                <div style={{display: 'flex'}}className="  bw2 ba b--blue  ">
                    <img src="../assets/house.png" width="200" height="200" className='fl'/>
                    <div >
                    <h2 className='f2 tl'>Fairmont <span className='dark-blue'>Community</span></h2>
                    <h2 className='f2 tl'>Partnership Group</h2>
                    <h2 className='f2 tl'>Inc.</h2>
                    </div>
                </div>

                
                   
                    <div className='h-100 mb0 bw2 ba b--blue' >
                <h2 className='red f2'>{ title}</h2>
                <p>by: {author}</p>
        
               
                <p  className='tl pa3 '  style={{whiteSpace:'pre-wrap'}}>{content}</p>   
                </div>
                <div className='bt bw2 b--dark-blue bg-dark-blue '>
                    <ul className='list'>
                    {showFiles()};
                    </ul>
                </div>
                 
                </article>
            </div>
        )
        
     
}

export default  OneBlogPost ;