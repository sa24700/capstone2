import React, { useRef } from "react";
import { FilePicker } from 'react-file-picker'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function CreateBlogPost({loadUser, getAppUser}){
    const titleInput = useRef(null);
    const authorInput = useRef(null);
    const contentInput = useRef(null);
    const fileInput = useRef(null);

    function onSubmitPost(e) {
        e.preventDefault();
        const blogPost = {
            title: titleInput.current.value,
            author: authorInput.current.value,
            content: contentInput.current.value,
            file: fileInput.current.value,
        }
        axios.post('http://localhost:5001/createPost',blogPost).then(res => console.log(res.data));
     }

     const navigate = useNavigate();
    
    return (

        <div>
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={onSubmitPost}>
                        <fieldset id="createPost" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">New Post</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="title">Title</label>
                            <input 
                            ref={titleInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="title"  
                            id="title" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="author">Author</label>
                            <input 
                            ref={authorInput} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="author"  
                            id="author" />
                        </div>
                        <div className="mv3">
                            <textarea ref={contentInput} cols="50" rows="30" type="text" name="content" id="content" placeholder="This entry is about . . .">
                                
                            </textarea>
                        </div>
                        <div className="mv3">
                            <input id="filePicker" type="file" ref={fileInput}></input>
                            
                        </div>
                        </fieldset>
                        <div className="lh-copy mt3">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value='Create'></input>
                        </div>
                        <div className="lh-copy mt3">
                            <input onClick={ () => { navigate("/") } } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value='Cancel'></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>

    );
}

export default CreateBlogPost;
