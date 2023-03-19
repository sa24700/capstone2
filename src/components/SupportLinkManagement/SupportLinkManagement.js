import React, { useEffect, useRef, useState } from "react";
import LinkMangementTableBody from "./LinkMangementTableBody";
import LinkSearchBox from "./LinkSearchBox";

function SupportLinkManagement(){
    const [linkList, setLinkList]= useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filteredLinks, setFilteredLinks] = useState([]);
    const submitSupportLinkSiteName = useRef();
    const submitSupportLinkSiteUrl = useRef();

    const onLinkSearchChanged = (e) => {
        console.log(e.target.value)
        const filteredLinks = linkList.filter(link =>{
            return link.site_name.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setFilteredLinks(filteredLinks);
        console.log(filteredLinks);
    }

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
                        setFilteredLinks(() =>{return jsonData})
                        setLoaded(() =>{return true});
                    });
        }
    },[loaded])

    function onSubmitSupportLink(e) {
        e.preventDefault();
         fetch('http://localhost:5001/insertSupportLink',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                site_name: submitSupportLinkSiteName.current.value,
                url: submitSupportLinkSiteUrl.current.value
            })
         }).then(() =>{
            alert('Successfully submitted link!')
            submitSupportLinkSiteName.current.value = ''
            submitSupportLinkSiteUrl.current.value = ''
            setLoaded(() =>{return false})
         });
     }
    
    if(!loaded){
        return (
            <div>
                <h1>Support Link Management</h1>
                <p>Loading content...</p>
            </div>
        )
        
    } else {
        return (
            <div>
                <h1>Support Link Management</h1>
                <div>
                    <p>Create a new Support Link:</p>
                    <p>MUST INCLUDE: http://www. in the link URL</p>
                    <form onSubmit={onSubmitSupportLink}>
                        <input 
                            type='text'
                            placeholder="Site Name"
                            ref={submitSupportLinkSiteName} 
                            required='true'
                        />
                        <input 
                            type='text'
                            placeholder="Site URL"
                            ref={submitSupportLinkSiteUrl} 
                            required='true'
                        />
                        <input type='submit'value='Submit'/>
                    </form>
                </div>
                <p>Search Support Links by:</p>
                <LinkSearchBox onLinkSearchChanged ={onLinkSearchChanged}/>
                <LinkMangementTableBody linkList ={filteredLinks} setStateLoaded = {setLoaded}/>
            </div>
        );
    }
}

export default SupportLinkManagement;