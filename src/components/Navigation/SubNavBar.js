import React from "react";
import { Link } from "react-router-dom";
import "./SubNavBar.css";
import search_icon from "../../assets/search_icon.png";

function SubNav() {
    return(
       
            <div className="SubNavContainer">
                <nav className="SubNavBar">
                    
                            <ul>
                                <li>
                                    <p><Link to="/gallery" className="SubNavLink">Gallery</Link></p>
                                </li>
                                <li>
                                    <p className="bl2"><Link to="/blog" className="SubNavLink">Blog</Link></p>
                                </li>

                                <li>
                                    <p className="bl2"><Link to="/volunteer" className="SubNavLink">Get Involved</Link></p>
                                </li>
                                
                                
                                <li>
                                    <p className="bl2"><Link to="/chatroom" className="SubNavLink">Chatroom</Link></p>
                                </li>
                                
                                <li>
                                    <p className="bl2"><Link to="/signin" className="SubNavLink">Sign In</Link></p>
                                </li>
                                
                                <li>
                                    <p className="bl2"><Link to="/admin-panel" className="SubNavLink">Admin Panel</Link></p>
                                </li>

                            </ul>
                                       
                </nav>
            </div>

    )

};


export default SubNav;
