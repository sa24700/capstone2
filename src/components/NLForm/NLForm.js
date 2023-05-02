import React, { useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
 
import EventItems from '../EventItems/EventItems';
import { setRef } from "@fullcalendar/core/internal";
import { useNavigate } from "react-router-dom";

function NLForm(){

        const titleInput = useRef(null);    
        const contentInput = useRef(null);    
        const startTimeInput = useRef(null);
        const languageInput = useRef(null);  
        const formRef = useRef();
        const today = new Date().toISOString().slice(0, -12);
        const navigate = useNavigate();




        async  function onSubmitPost(e){
            e.preventDefault();
            console.log("in submit " + today);
            var newsletterContent = {
                title: titleInput.current.value,           
                content: contentInput.current.value,              
                startTime: startTimeInput.current.value,  
                language: languageInput.current.value
            }

            formRef.current.reset();
            navigate('/');          
            await  axios.post('http://localhost:5001/sendNewsletter', newsletterContent).then(res => console.log(res.data));
        }
 
        function cancelPost(){
            formRef.current.reset();
            window.scrollTo(0, 0);
        }

        return (

            <div>
                <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                    <main className="pa4 black-80">
                        <form className="measure" onSubmit={onSubmitPost} ref={formRef}>
                            <fieldset id="createPost" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Create Newsletter</legend>
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
                                <label className="db fw6 lh-copy f6" htmlFor="language">Select A Language</label>
                                <select name="language" id="language" ref={languageInput}>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                </select>
                            </div>
                            <div className="mv3">
                                <textarea ref={contentInput} cols="50" rows="30" type="text" name="content" id="content" placeholder="This entry is about . . .">
                                    
                                </textarea>
                            </div>
                        <div className='mv3'>
                            <label className="db fw6 lh-copy f6" htmlFor="startTime">startTime</label>
                            <input type="datetime-local" className="form-control" id="startTime" 
                                ref={startTimeInput} min={today}   required/>
                        </div>
                        
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"></input>
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

export default NLForm;