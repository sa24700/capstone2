import React, { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
 
import EventItems from '../EventItems/EventItems';
import { setRef } from "@fullcalendar/core/internal";
import { useNavigate } from "react-router-dom";

function NewsletterUpload(){
        const [loading, setLoading] = useState(true);
        const [newsletters, setNewsletters] = useState([]);
 
        const fileInput = useRef(null);
        const idInput = useRef(null);
        const formRef = useRef();
        const today = new Date().toISOString().slice(0, -12);
        const navigate = useNavigate();
        const fileName = new Array();


        function addFilename(e){
            fileName.push(e.target.files[0].name);
        }
 
        useEffect(()=>{

            async function getNewsletters(){
                setLoading(true);

                axios.get('http://localhost:5001/getAllNewsletters').then((res)=>{
                    setLoading(false)
                    setNewsletters(res.data);
                    console.log("data " + JSON.stringify(res.data));
                });
                setLoading(false);
            }

            getNewsletters();
        },[]);


        async  function onSubmitPost(e){
            e.preventDefault();
            console.log("in submit " + today);
            let form = document.getElementById("addNewsletter");
            let formData = new FormData (form);
             
     
            formData.append( 'fileName', fileName) 
            formData.append(  'file', fileInput.current.value) 
            formData.append('id', idInput.current.value);

            formRef.current.reset();
            navigate('/');          
            await  axios.post('http://localhost:5001/uploadNewsletter', formData).then(res => console.log(res.data));
        }
 
        function cancelPost(){
            formRef.current.reset();
            window.scrollTo(0, 0);
        }

        function fillSelectOptions(){
            return (newsletters.map((element) => {
                        return <option value={element._id} key={element._id}>{element.title}</option>
                    })

                   
                
            )
        }

        return (

            <div>
                <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                    <main className="pa4 black-80">
                        <form id="addNewsletter" onSubmit={onSubmitPost} ref={formRef}>
                            <fieldset id="addNewsletter" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Upload Newsletter</legend>
                            <div className="mt3">
                                { loading ? <div><p>Loading . . .</p></div> :  <select ref={idInput}>{fillSelectOptions()}</select>} 
                            </div>
                            <div className="mv3">
                            <input id="filePicker" type="file" ref={fileInput} className="form-control-file" onChange={  addFilename} name="file" ></input>
                            
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

export default NewsletterUpload;