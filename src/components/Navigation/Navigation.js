import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";



function Navigation({onRouteChange}){
    const [show, setShow] = useState(false);


    return (

        <div className="NavContainer">
            <nav className="NavBar">
               
                    <div className= "NavList "  onMouseLeave={()=>setShow(false)}>
                        <ul>
                            <li>
                                <p><Link to="/" className="NavLink">Home</Link></p>
                            </li>
                            <li>
                                <p className="bl"><Link to="/espanol" className="NavLink">Español</Link></p>
                            </li>
                               
                            <li>
                                <p className="bl"><Link to="/about" className="NavLink">About Us</Link></p>
                            </li>
                               
                            <li onMouseEnter={()=>setShow(true)} className="relative-absolute">
                                    <div className="relative-absolute" >
                                    <p  className="bl"  >Newsletter</p>
                                    { show == true  ? <div  onMouseEnter={()=>setShow(true)} className="bg-white pa2  absolute"><p className="  link dim"><Link to="/newsletter" className="NavLink">Newsletter</Link></p><p className="  link dim"><Link to="/newsletterES" className="NavLink">Boletin</Link></p></div>:<div></div>}
                                     </div>
                            </li>
                            
                            <li>
                                <p className="bl"><Link to="/calendar" className="NavLink">Calendar</Link></p>
                            </li>
                              
                            <li>
                                <p className="bl"><Link to="/resources" className="NavLink">Resources</Link></p>
                            </li>
                              
                            <li>
                                <p className="bl"><Link to="/contact" className="NavLink">Contact Us</Link></p>
                            </li>

                            
                        </ul>
                </div>

                
            </nav>
           

            

            
        
        </div>

    );
}

export default Navigation; 