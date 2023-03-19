import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SupportLink.css"

const SupportLink = (props) => {
    const id = useRef(props.id);
    const created = useRef(props.created);
    const [siteName, setSiteName] = useState(props.site_name);
    const [siteUrl, setSiteUrl] = useState(props.url);

    const navigate = useNavigate()

    function goToExternalSite(e){
        e.preventDefault();
        const site = siteUrl.toString()
        window.location.replace(site)
    }

    return (
         <a class="SupportLinkStyle" onClick={(e) => goToExternalSite(e)} href=''> {siteName} </a>
    );
}

export default SupportLink;