import React from "react";
import {Link} from 'react-router-dom';

function Hero(){
    return (
        <div className="cover bg-left bg-center-l">
            <div> 
            <img src="https://static.wixstatic.com/media/1cd9eba76a294db7befc9b890490d7f6.jpg/v1/fill/w_1099,h_510,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1cd9eba76a294db7befc9b890490d7f6.jpg" with="stretch" height='auto'/>
            </div>
            <div className="cover bg-left bg-center-l">
                <div className="bg-black-80 pb5 pb6-m pb7-l">
                    <h1 className="f2 f1-l fw2 white-90 mb0 mt0 pt5 lh-title">Fairmont Community Partnership Group Inc.</h1>
                    <h2 className="fw1 f3 white-80 mt3 mb4">Dedicated to enhancing and improving the lives of Fairmont residents.</h2>
                    <Link className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" to="/donate">Support Us!</Link>
                    <span className="dib v-mid ph3 white-70 mb3">or</span>
                    <Link className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" to="/newsletter">Newsletter Signup</Link>
 
                </div>
            </div>
        </div>
    );
}

export default Hero;
