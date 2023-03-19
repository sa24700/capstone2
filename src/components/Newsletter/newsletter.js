import React, { useRef } from "react";
import axios from 'axios';

function Newsletter(){
    const emailInput = useRef(null);
    function onSubmitNewsletter(e){
        e.preventDefault();
        
          console.log("here in submit"+emailInput.current.value)
        const emailRegex = new RegExp('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/');
        if (emailRegex.test(emailInput.current.value) === false){
            console.log("I'm a valid email" + emailInput.current.value);
            const newPerson = {email : emailInput.current.value};
            axios.post('http://localhost:5001/newsletter',newPerson).then(res => console.log(res.data));
 
        }
        else{
            console.log("I'm an invalid email")
        }
}

    return (
        <div>
            <div>
                <h1>Newsletter</h1>
                <p>This is our news letter</p>
            </div>
            <div>
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={onSubmitNewsletter}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign up to stay in the know!</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            ref={emailInput}
                            className="pa2 input-reset ba bg-transparent   w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" />
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value={'Submit'}></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>
            
        </div>
    );
}

export default Newsletter;