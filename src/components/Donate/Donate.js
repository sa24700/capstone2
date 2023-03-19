import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SupportLinkDiv from "./SupportLinkDiv";
import "./SupportUs.css"

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
            <div className="SupportUsDiv">
                <div>
                    <h1>Support Us</h1>
                    <p>There are many ways to support Fairmont as we continue to suppot our community. Below are some ways to do just that!</p>
                </div>
                <div>
                    <p>Loading content...</p>
                </div>
            </div>
        )
        
    } else {
        return (
            <div className="SupportUsDiv">
                <div>
                    <h1>Support Us</h1>
                    <p>There are many ways to support Fairmont as we continue to suppot our community. Below are some ways to do just that!</p>
                </div>
                <div>
                    <SupportLinkDiv linkList = {linkList}/>
                </div>
                
                
            </div>
        );
    }
}

export default Donate
;