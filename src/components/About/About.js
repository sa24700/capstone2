import React from "react";
import Navigation from "../Navigation/Navigation";

function About({getAppUser}){
    return (
        <div>
            <h1>About</h1>
            {console.log(getAppUser())}
        </div>
    );
}

export default About;