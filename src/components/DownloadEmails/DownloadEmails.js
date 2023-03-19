import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { CSVLink } from "react-csv";

function DownloadEmails(){
    const [emailList, setEmailList]= useState([]);
    const [loaded, setLoaded] = useState(false);

    function getEmails() {
        return emailList;
    }

    useEffect(() =>{
        fetch('http://localhost:5001/newsletterJson',{
                        method: 'get',
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(data => { 
                        return data.json();
                    })
                    .then(data => {
                        setEmailList(() => { return data; })
                        setLoaded(() =>{return true});
                    });
    },[])
    
    if (!loaded) {
        return (
        <div>
            <p>Loading....</p>
        </div>
        )
        
    } else {
        return (
            <div>
                <CSVLink data={getEmails()} headers={[{ label: 'Email', key: 'email' }]}>Download me</CSVLink>
            </div>
        )
    }
}

export default DownloadEmails;