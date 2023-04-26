import React, { useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
 
import { useNavigate } from "react-router-dom";

function AddPhoto(){

        const titleInput = useRef(null);    
        const contentInput = useRef(null);    
        const imgPathInput = useRef(null);
        const albumInput = useRef(null);  
        const formRef = useRef();
        var fileName = useRef(null);
        const navigate = useNavigate();

        function addFilename(e){
            fileName = (e.target.files[0].name);
        }


        async  function onSubmitPost(e){
            e.preventDefault();
            console.log("Submitting Image");
            let form = document.getElementById("addPhotoForm");
            let formData = new FormData (form);
             
     
            formData.append('fileName', fileName );
            formData.append(  'file', imgPathInput.current.value); 
 
            console.log("formData" + JSON.stringify(formData));
            formRef.current.reset();
            navigate('/');          
            await  axios.post('http://localhost:5001/uploadPhoto', formData).then(res => console.log(res.data));
        }
 
        function cancel(){
            formRef.current.reset();
            window.scrollTo(0, 0);
        }

        return (

            <div>
                <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                    <main className="pa4 black-80">
                        <form id="addPhotoForm" onSubmit={onSubmitPost} ref={formRef}>
                            <fieldset id="addPhoto" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Upload Photo</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="title">Title</label>
                                <input 
                                ref={titleInput}
                                className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                                type="text" 
                                name="title"  
                                id="title" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="album">Album Name</label>
                                <input 
                                ref={albumInput}
                                className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                                type="text" 
                                name="album"  
                                id="album" />
                            </div> 
                            <div className="mv3">
                                <textarea ref={contentInput} cols="50" rows="30" type="text" name="content" id="content" placeholder="This entry is about . . .">
                                    
                                </textarea>
                            </div>
 
                        <div className="mv3">
                            <input id="filePicker" type="file" ref={imgPathInput} className="form-control-file" onChange={addFilename}   name="file" ></input>
                            
                        </div>                       
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"></input>
                        </div>
                        <div className="lh-copy mt3">
                            <input onClick={()=>   cancel()   } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value='Cancel'></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>
          
        );
    
}

export default AddPhoto;