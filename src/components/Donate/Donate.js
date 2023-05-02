import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Donate.css"
import paypal_giving_fund_button from "../../assets/paypal_giving_fund_button.png";



function Donate(){
    
        return (
            <div>

                <div className="DonateBanner">
                    <h1>Donate</h1>
                </div>

                <div className="DonateTextDiv">
                    <h1>How Your Donation Helps</h1>
                    <h2 className="fw5 f3  mt3 mb4">Donations will be used to support the continued work of FCPGI, resources
                        referrals, the community garden, community clean-ups, workshops, Community Days,
                        and day-to-day operations.</h2>
                        
                </div>

                <div className="DonateTextDiv">
                    <h1 className="fw4 f3  mt3 mb4">Monetary Donations</h1>

                    
                    <h2 className="fw5 f3  mt3 mb4">You can donate online through our PayPal Giving Fund:</h2>
                    <div className="PayPalDiv">
                        <a className="" href="https://www.paypal.com/fundraiser/charity/4292318" target="_blank">
                        <img src={paypal_giving_fund_button} alt=''/>
                        </a>
                    </div>
                    
                    
                    
                    
                    
                    <h2 className="fw5 f3  mt3 mb4">Or you can donate by sending a check to:</h2>
                        <br />
                        <h2 className="fw5 f3  mt3 mb4">FCPGI </h2>
                        <h2 className="fw5 f3  mt3 mb4">18101 W. Oak Avenue,</h2>
                        <h2 className="fw5 f3  mt3 mb4">Lockport, IL 60441</h2>
                               
                </div>
            </div>
                
        )
        
    } 
        
    


export default Donate;