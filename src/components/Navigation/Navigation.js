import React from "react";
import { Link } from "react-router-dom";

function Navigation({onRouteChange}){
    return (
        <nav className="center bg-white" style={{display: 'flex'}}>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/">Home</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/about">About</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/gallery">Gallery</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/blog">Blog</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/chatroom">Chatroom</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/donate">Donate</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/newsletter">NewsLetter</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/admin-panel">Admin Panel</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/signin">Sign in</Link></p>
            <p className="f5 link dim white underline pa3 pointer"><Link to="/calendar">Calendar</Link></p>
        </nav>
    );
}

export default Navigation; 