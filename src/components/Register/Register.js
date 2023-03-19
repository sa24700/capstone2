import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Register({loadUser, getAppUser}) {
    const userNameInput = useRef(null);
    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const confirmPasswordInput = useRef(null);
    const navigate = useNavigate();

    function onSubmitRegister(e) {
        e.preventDefault();
        const newUser = {
                userName: userNameInput.current.value,
                fName: firstNameInput.current.value,
                lName: lastNameInput.current.value,
                email: emailInput.current.value,
                password: passwordInput.current.value            
        }
        axios.post('http://localhost:5001/register', newUser).then(user => {
             if(user){
                console.log(user)
                loadUser(user);
                navigate('/')
             }
         });
     }
    
    return (
        <div>
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={onSubmitRegister}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="userName">UserName</label>
                            <input 
                            ref={userNameInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="userName"  
                            id="userName" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="first-name">First Name</label>
                            <input 
                            ref={firstNameInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="first-name"  
                            id="first-name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="last-name">Last Name</label>
                            <input 
                            ref={lastNameInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="last-name"  
                            id="last-name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input 
                            ref={emailInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input 
                            ref={passwordInput}
                            className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="confirm-password">Confirm Password</label>
                            <input 
                            ref={confirmPasswordInput}
                            className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="password" 
                            name="confirm-password"  
                            id="confirm-password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
}

export default Register;
