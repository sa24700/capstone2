import React, { useRef , useEffect} from "react";
import { FilePicker } from 'react-file-picker'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function CreateBlogPost({loadUser, getAppUser}){
    const titleInput = useRef(null);
    const authorInput = useRef(null);
    const contentInput = useRef(null);
    const filesInput = useRef(null);
    const formRef = useRef();
    const navigate = useNavigate();
    const fileName = new Array();


    function addFilename(e){
        fileName.push(e.target.files[0].name);
    }

      async function onSubmitPost(e) {
        e.preventDefault();
        let form = document.getElementById("measure");
        let formData = new FormData (form);
         
 
        formData.append( 'fileName', fileName) 
        formData.append(  'file', filesInput.current.value) 
         
        console.log("formData" + JSON.stringify(formData));
       formRef.current.reset();
       navigate('/');

        console.log("Here is the file length" + fileName.length);
       if(fileName.length === 0){
             await axios.post('http://localhost:5001/createPost',formData).then(res => console.log(res.data));
       }
       else if(fileName.length === 1){
             await axios.post('http://localhost:5001/createPost/singleFile',formData).then(res => console.log(res.data));
       }
       else if( fileName.length > 1){
            await axios.post('http://localhost:5001/createPost/manyFiles',formData).then(res => console.log(res.data));
       }
     }

    function cancelPost(){
        formRef.current.reset();
        window.scrollTo(0, 0);
    }
    
    return (

        <div>
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <main className="pa4 black-80">
                    <form id="measure" onSubmit={onSubmitPost} ref={formRef}  encType="multipart/form-data">
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
                            <input id="filePicker" type="file" ref={filesInput} className="form-control-file" multiple onChange={addFilename} name="file" ></input>
                            
                        </div>
                        </fieldset>
                        <div className="lh-copy mt3">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value='Create'></input>
                        </div>
                        <div className="lh-copy mt3">
                            <input onClick={()=>   cancelPost()   } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value='Cancel'></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>

    );
}

export default CreateBlogPost;
