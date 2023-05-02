import React from "react";
import Navigation from "../Navigation/Navigation";
import "./About.css"


function About({getAppUser}){
    return (
        <><div>
            
            {console.log(getAppUser())}
        </div>
        <div>
            <div className="AboutBanner">
                    <h1>About Us</h1>
            </div>

      
                
            <div className="AboutTextDiv">
                <h1>Our Mission</h1>
    
                <h2 className="fw5 f3 mt3 mb4"> We are committed to working diligently together
                        with our residents and neighbors toward the continued improvement of the Fairmont community.
                        We are committed to improving the health and well-being of the residents of Fairmont and to
                        returning Fairmont to a community we can all be proud of. 
                </h2>
           </div>
      
            
      
            <div className="AboutTextDiv">
                <h1 >About Us</h1>
                <h2 className="fw5 f3  mt3 mb4"> The Fairmont Community Partnership Group Inc. was 
                        established to improve the lives and living conditions of the residents of the Fairmont
                        community. We do this by providing case management services for legal aid, mental health 
                        support services, and food pantries. 
                </h2>
                <h2 className="fw5 f3 mt3 mb4">
                        We also plan to carry out programs for the community in partnership with other health, 
                        social service, educational, and government agencies. We have assisted with violence prevention 
                        workshops, vaccine clinics, home improvement support services, and after-school activities. 
                </h2>
            </div>
          

        
            <div className="AboutTextDiv">
                <h1>Staff</h1>

                <div className="StaffDiv">
                    <div className="StaffImg">
              
                    </div>
                

                    <div className="StaffTextDiv">
                        <h1>DeLinda Herod - Executive Director</h1>
                        <h2 className="fw5 f3 mt3 mb4"> I have worked as a community activist in the Fairmont
                        Community since 2015. I strive to ensure our community is SAFE and CLEAN. I advocate
                        for the fair distribution of Community Development Block Grant Funds to ensure Fairmont
                        is no longer overlooked and undeserved. We have partnered with Lewis University in the 
                        past and on many ongoing projects. I currently sit on the Community Advisory Board at
                        Shriver National Center on Poverty Law. The newly launched R3 program will ensure 
                        residents of the Fairmont Community have access to resources that will improve and 
                        enhance their lives. We look forward to serving you.
                        </h2>

                        <h2 className="fw5 f3 mt1 mb0"><span class="b">Phone:</span> (815) 931-2324 (English)</h2>
                        <h2 className="fw5 f3 mt1 mb0"><span class="b">Phone:</span> (815) 931-2325 (Spanish)</h2>
                        <h2 className="fw5 f3 mt1 mb0"><span class="b">Email:</span> Dherod.fcpgi@gmail.com</h2>
                        
                    </div>
                    

                </div>
                
            </div>
           


        </div>
        </>



    );
}

export default About;