import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Contact.css";
import ContactForm from "./ContactForm";
import fb_icon from "../../assets/fb_icon.png";
import ig_icon from "../../assets/ig_icon.png";

function Contact(){
    return (
        <><div>
            <div className="ContactBanner">
                    <h1 >Contact Us</h1>
            </div>
            
            


            <div className="ContactDiv">
                <div className="FormDiv">
                    <h2> Send us a message! </h2>
                    <div className="mt0">
                        <ContactForm/>
                    </div>
                    
                </div>

                <div className="ContactInfoDiv">
                    <h2 className="fw5 grey-80 mt4 mb1">Executive Director: (815) 931-2324 </h2>
                    <h2 className="fw5 grey-80 mt1 mb5">Case Manager: (815) 931-2325 </h2>

                    <h2 className="fw5 grey-80 mt3 mb0">Office Located inside Shiloh Baptist Church</h2>
                    <h2 className="fw5 grey-80 mt1 mb0">18101 West Oak Avenue</h2>                        
                    <h2 className="fw5 grey-80 mt1 mb5">Lockport, IL 60441 </h2>
               
                    <div>
                        <h2>Follow us on social media!</h2>
                        <div className="Socials">
                            <a className="white" href="https://www.facebook.com/FCPGInc/" target={"_blank"} rel="noopener noreferrer"><img src={fb_icon}></img></a>
                            <a className="white" href="https://www.instagram.com/fairmontfalconstrong/" target={"_blank"} rel="noopener noreferrer"><img src={ig_icon}></img></a>
                        </div>
                    </div>
                
                </div>
                

            </div>








        </div>
        
         </>
    );
}

export default Contact; 