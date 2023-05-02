import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import fcpgi_icon from "../../assets/fcpgi_icon.png";
import roof_icon from "../../assets/roof_icon.png";
import fb_icon from "../../assets/fb_icon.png";
import ig_icon from "../../assets/ig_icon.png";

const Footer = () => {
    return(
        
        <div className="footer">

            <div className="subfooter container">

                <div className="col_img2">
                    <p><img src={roof_icon} alt=""/></p>
                </div>
                <hr className="bw1" color="#004aad"></hr>
                <div className="row">


                    <div>

                        <div className="col_img">
                            <div className="LogoDiv">
                            <p><img src={fcpgi_icon} alt=""/></p>
                            </div>
                        </div>

                        <div className="col1" >
                            <h1 className="f2 fw4 grey-80 mb0 mt0 pt3 lh-title">Contact Us</h1>
                            <h2 className="fw4 f4 grey-80 mt3 mb1">DeLinda Herod, Executive Director: (815) 931-2324 </h2>
                            <h2 className="fw4 f4 grey-80 mt1 mb0">Case Manager: (815) 931-2325 </h2>
                            <h2 className="fw4 f4 grey-80 mt3 mb0">Office Located inside Shiloh Baptist Church</h2>
                            <h2 className="fw4 f4 grey-80 mt1 mb0">18101 West Oak Avenue</h2>
                            <h2 className="fw4 f4 grey-80 mt1 mb0">Lockport, IL 60441 </h2>
                        </div>

                    </div>

                    <div className="col_img3">
                        <a className="white" href="https://www.facebook.com/FCPGInc/" target={"_blank"} rel="noopener noreferrer"><img src={fb_icon}></img></a>
                        <a className="white" href="https://www.instagram.com/fairmontfalconstrong/" target={"_blank"} rel="noopener noreferrer"><img src={ig_icon}></img></a>
                        
                    </div>

                    

            </div>
                <hr></hr>
                <div className="below">
                    <div className="copyright">
                        <p>
                        @{new Date().getFullYear()} Fairmont Community Partnership Group Inc.
                        </p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Footer;