import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SupportLinkDiv from "./SupportLinkDiv";
import "./SupportUs.css"
import "./Donate.css"

function Donate(){
    const [linkList, setLinkList]= useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        if(!loaded){
            fetch('http://localhost:5001/supportLinks',{
                        method: 'get',
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(data => { 
                        return data.json();
                    })
                    .then(jsonData => {
                        setLinkList(() => { return jsonData })
                        setLoaded(() =>{return true});
                    });
        }
    },[loaded])

    if(!loaded){
        return (
            <><div>


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
                        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="https://www.paypal.com/fundraiser/charity/4292318" target="_blank">Donate with PayPal</a>
                        
                </div>

     
                </div>
                </>
        )
        
    } else {
        return (
            <>
                <div>
                    <div className="DonateDiv">
                        <h1>Help us improve our community.</h1>
                        <p>Any and all contributions help to achieve our goal to revitalize our community 
                            and improve the lives of our residents.</p>
                        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="https://www.paypal.com/fundraiser/charity/4292318" target="_blank">Donate with PayPal</a>
                    </div>
                </div>
                <div className="SupportUsDiv">
                    <div>
                        <h1>Support Us</h1>
                        <p>There are many other ways to support Fairmont as we continue to suppot our community. Below are some ways to do just that!</p>
                    </div>
                    <div>
                        <SupportLinkDiv linkList={linkList} />
                    </div>


                </div></>
        );
    }
}

export default Donate
;