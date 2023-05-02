import React from "react";
import { Link } from "react-router-dom";
import fcpgi_icon from "../../assets/fcpgi_icon.png";
import search_icon from "../../assets/search_icon.png";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SubNavBar from "../Navigation/SubNavBar";


function Header(){
    return(
        <div className="Header">
            <div className="HeaderContainer">
                <div className="HeaderRow">
                   
                        <div className="HeaderCol1">
                            <div  className="NavLogoDiv">
                                <Link to="/"><img src={fcpgi_icon} alt="fcpgi logo"/></Link>
                                <h2>FCPGI</h2>
                            </div>
                        </div>

                        <div className="HeaderCol2">
                            <Navigation/>
                        </div>
                    
                        <div className="HeaderCol4">
                            <img src={search_icon} alt="search icon"/>
                        </div>
                        
                        <div className="NavDonateButton">         
                            <button className="DonateButton"><Link to="/donate" className="DonateLink">Donate</Link></button>
                        </div>
                  


                </div>
                
                <div className="HeaderCol3">
                    <SubNavBar/>
                    
                </div>
                
            </div>
        </div>

    )
};


export default Header;


