import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import Validation from "./Validation";



export default function ContactForm() {
    const form = useRef()

 

    
    const [values, setValues] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const newObj = {...values, [event.target.name]: event.target.value}
        setValues(newObj)
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));

        
    }
    
    


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div>
            <div className="ContactFormContainer">

                <form ref={form} onSubmit={sendEmail} className="ContactForm">
                    <input type="text"
                    placeholder="Name"
                    name="name" required onChange={handleInput}/>
                    {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                    <input type="email"
                    placeholder="E-mail"
                    name="user_email" required onChange={handleInput}/>
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                    <input type ="text"
                    placeholder="Subject"
                    name="subject" required onChange={handleInput}/>
                    {errors.subject && <p style={{color: "red"}}>{errors.subject}</p>}

                    <textarea name="message" placeholder="Message"
                    cols="30" rows="10"></textarea>

         

                    <button type="submit" className="SubmitMessage">Submit</button>
                </form>


            </div>
        </div>
    )
}

/*
function ContactForm() {
    const [name, setName] = useState('');
    const emailAddressInput = useRef(null);
    const phoneNumberInput = useRef(null);
    const messageInput = useRef(null);


    function onSubmitSendMail(e) {
        e.preventDefault();

    }



    return(
        <div>
            <article>
                <div>
                    <h2>Contact Us!</h2>
                    <form onSubmit={OnSubmitSendMail}>
                        <input type="text" id="name" name="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                        
                    </form>
                </div>



            </article>

        </div>

    );
}
*/