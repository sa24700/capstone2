import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import {   Link } from 'react-router-dom';
import printJS from 'print-js';

function Newsletter(){

    const emailInput = useRef(null);
    const [loading, setLoading] = useState(false);
    const [allNewsletters, setAllNewsletters] = useState(null);
    const [newsletters, setNewsletters] = useState(null);


    function onSubmitNewsletter(e){
        e.preventDefault();
        
          console.log("here in submit"+emailInput.current.value)
        const emailRegex = new RegExp('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/');
            if (emailRegex.test(emailInput.current.value) === false){
                console.log("I'm a valid email" + emailInput.current.value);
                const newPerson = {email : emailInput.current.value, language: "english"};
                axios.post('http://localhost:5001/newsletter',newPerson).then(res => console.log(res.data));
    
            }
            else{
                console.log("I'm an invalid email")
            }
        }

       function showNewsletter(el){
            setNewsletters(el);
            document.getElementById("newsletter").scrollIntoView();

       }

 

        async function printNewsletter(el) {
            await axios.get('http://localhost:5001/printNewsletter/'+el, {responseType: 'blob'}).then(res =>{
              
               
                const printPDF = URL.createObjectURL(res.data);
                printJS(printPDF)
            })
        }

        function displayNewsletters(){
            if(!allNewsletters) return;
             var reverseArray = [... allNewsletters]
             reverseArray  = reverseArray.reverse();
              

            return reverseArray.map((element) => {
                console.log("element " + element.path);
                return (
                    <div key={element._id} className="w-25 tl mv2 ml4 ba b--dark-blue bg-dark-blue" >
                    <p className="pa2 white">{element.title}</p>
                        <div style={{display: 'flex'}}>
                            <button onClick={()=> showNewsletter(element)}>Show</button>
                            <Link to={'http://localhost:5001/getNewsletter/'+element.path}><button  >Download</button></Link>
                            <button onClick={()=> printNewsletter(element.path)}>Print</button>
                        </div>
                    </div>
                )
            });
        }

        useEffect(()=>{
            setLoading(true);
            async function getEnglishNewsletters(){
                await axios.get('http://localhost:5001/getAllNewsletters/english').then(res =>{
                    const last = res.data.length - 1;
                    setAllNewsletters(res.data);
                    setNewsletters(res.data[last])
                    console.log("data " + res.data);
                    console.log("newsletters " + JSON.stringify(res.data))
                    
                });
                setLoading(false);
            }
            getEnglishNewsletters();
        },[]);

    return (
        <div>
            <img src="./assets/newsletter.png" alt="newsletter banner" className="w-100"/>
            <article className="mw6 mw6 center   flex flex-column mt2">
                <p className="f3 tl ">Our newsletters contain <span className="fw6"> important dates, community events</span>, 
                and <span className="fw6">must-know information </span>
                for Fairmont community members.
                </p>
            <form className="measure" onSubmit={onSubmitNewsletter}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3  tl ph0 mh0">Enter your email address to be notified when a
                            new newsletter is posted.
                        </legend>
                        <div className="mt3">
                            
                            <input 
                            ref={emailInput}
                            
                            className="pa2 input-reset ba b--red bg-transparent   w-100" 
                            placeholder="Email:"
                            type="email" 
                            name="email-address"  
                            id="email-address" />
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--red bg-transparent grow pointer f6 dib" type="submit" value={'Submit'}></input>
                        </div>
                    </form>
            </article>


            <div id="newsletter" className="mw7 mw7 center   flex flex-column mt4">
                <div>
                    <div className="fl mw5 flex flex-column bg--grey">
                        <img src="./assets/side1.png" height="200" width="200"/>
                        <img src="./assets/side2.png" height="200" width="200"/>
                        <img src="./assets/combo1.png" height="200" width="200"/>
                        <img src="./assets/side3.png" height="200" width="200"/>
                        <img src="./assets/side4.png" height="200" width="200"/>
                        <img src="./assets/side5.png" height="200" width="200"/>
                        <img src="./assets/combo2.png" height="200" width="200"/>
                    </div>
                    <div className="fl mw6 flex flex-column  ">
                        <img src="./assets/newsletterHeader.png" height="300" width="700"  />
                        {  loading || !newsletters ? <div><p>Loading . . .</p></div> : <div><h2 className="red">{newsletters.title}</h2><p className="tl  " style={{whiteSpace:'pre-wrap'}}>{newsletters.content}</p></div> }
                        
                    </div>
                    <div className="  bb bw2 b--red   fl mt0 pt0  w-100 ">
                        <img src="./assets/roof.png" className=" fr" height="50" width="200"/>
                      </div>   
                            <p className="  f2 fr">Here for <span className="f2 dark-blue">you</span></p>
                        
                  

                </div>
                {  loading || !newsletters ? <div><p>Loading . . .</p></div> : <div><p className="fw6 f4 fr">{new Date(newsletters.date).toLocaleString('en-us',{month:'long', year:'numeric'})}</p></div>} 
            </div>
            <section className="bt bw2 b--red">
                <h2>Newsletter Archive</h2>
            {  loading || !newsletters ? <div><p>Loading . . .</p></div> :  displayNewsletters()}
            </section>
            
        </div>
    );
}

export default Newsletter;