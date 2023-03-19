import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";


function Signin({loadUser, getAppUser}){
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    function onSubmitSignIn(e) {
        e.preventDefault();
         fetch('http://localhost:5001/login',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: emailInput.current.value,
                password: passwordInput.current.value
            })
         }).then(response => response.json())
         .then(user => {
             if(user.id){
                 loadUser(user);
                 navigate("/");
             }
         })
     }

     const navigate = useNavigate();
    
    return (

        <div>
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={onSubmitSignIn}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            ref={emailInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            ref={passwordInput} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value={'Submit'}></input>
                        </div>
                        <div className="lh-copy mt3">
                            <input onClick={ () => { navigate("/register") } } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value={'Register'}></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>

    );
}

export default Signin;
