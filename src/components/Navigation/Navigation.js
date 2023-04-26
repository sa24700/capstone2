import React from "react";
import { Link } from "react-router-dom";

function Navigation({onRouteChange}){
    return (
        <nav className="center bg-white" style={{display: 'flex'}}>
            <p className="  ph3 no-underline"><Link to="/">Home</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/about">About</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/gallery">Gallery</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/blog">Blog</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/chatroom">Chatroom</Link></p>
           
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/newsletter">NewsLetter</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/admin-panel">Admin Panel</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/signin">Sign in</Link></p>
            <p className="bl bw1 b--blue ph3 no-underline"><Link to="/calendar">Calendar</Link></p>

             <button className="br-pill bg-dark-red b--dark-red link  white   ph3 ma1"><Link to="/donate">Donate</Link></button>
        </nav>
    );
}

export default Navigation; 