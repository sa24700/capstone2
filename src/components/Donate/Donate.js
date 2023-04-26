import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Donate.css"

function Donate(){
    
        return (
            <div>

                <div className="DonateBanner">
                    <h1 className="f2 f1-l fw5 white-90 mb0 mt0 pt5 lh-title">Donate</h1>
                </div>

                <div className="DonateTextDiv">
                    <h1>How Your Donation Helps</h1>
                    <h2 className="fw4 f3  mt3 mb4">Donations will be used to support the continued work of FCPGI, resources
                        refferals, the community garden, community clean-ups, workshops, Community Days,
                        and day-to-day operations.</h2>
                        
                </div>

                <div className="DonateTextDiv">
                    <h1 className="fw4 f3  mt3 mb4">Monetary Donations</h1>
                    
                    <h2 className="fw4 f3  mt3 mb4">You can donate online or by sending a check to:</h2>
                        <br />
                        <h2 className="fw4 f3  mt3 mb4">FCPGI </h2>
                        <h2 className="fw4 f3  mt3 mb4">18101 W. Oak Avenue,</h2>
                        <h2 className="fw4 f3  mt3 mb4">Lockport, IL 60441</h2>
                               
                </div>
            </div>
                
        )
        
    } 
        
    


export default Donate;