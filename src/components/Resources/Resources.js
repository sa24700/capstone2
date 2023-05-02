import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Resources.css"
import heart_icon from "../../assets/heart_icon.png";


function Resources() {
    return(
        <div>
            <div className="ResourcesBanner">
                    <h1>Resources</h1>
            </div>





            <div className="ResourcesTitleDiv">
                <h1 className="mb5">Find a service you are looking for from the list below.</h1>
       
            </div>



            <div className="ResourcesContainer">
                <div className="ResourceCol1">

                <div className="ResourcesTextDiv">
                        <div className="FinancialResourceDiv">
                        <h1>Financial Assistance</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://habitatwill.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1"> Lockport Love</h2>
                                </a>
                            </div>
                            
                            <p>"We raise money and accept donations throughout the year to help families who 
                                truly need assistance while facing unexpected and emergency situations."
                               
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.lockporttownship.com/programs/financial_aid.php" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Township - Financial Aid</h2>
                                </a>
                            </div>
                            
                            <p>"Lockport Township General Assistance Office provides financial
                                assistance and referral information to Lockport Township
                                individuals and families during severe economic times."
                               
                                
                            </p>
                        </div>


                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.lockporttownship.com/programs/financial_aid.php" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Will County Center for Community Concerns - Financial Literacy</h2>
                                </a>
                            </div>
                            
                            <p>The Financial Literacy Program is designed to educate
                                participants on budgeting, money management, insurances,
                                identity theft, credit and much more.
                              
                            </p>
                        </div>
                        
                    </div>
                    <div className="ResourcesTextDiv MentalResourceDiv">
                        <div className="MentalResourceDiv">
                            <h1>Mental Health</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.bridgestoanewday.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Bridges to a New Day</h2>
                                </a>
                            </div>
                            
                            <p>"Bridges to a New Day, nfp is a non-profit whose mission is to
                                provide prevention, intervention and educational services which
                                foster non-violence in the lives of children and adults."
                          
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://insightfulcrisisresponse.com/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Insightful Crisis Response</h2>
                                </a>
                            </div>
                            
                            <p>"We will help the members of your organization become
                                confident and capable of recognizing the signs of a potential
                                mental health crisis and respond to those situations
                                effectively."
                             
                                                            
                            </p>
                        </div>


                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.namiwillgrundy.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">NAMI Will-Grundy</h2>
                                </a>
                            </div>
                            
                            <p>"Our mission is to provide education, support, advocacy, and
                                public awareness, so that all individuals and families affected
                                by mental illness can build better lives."
                           
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://willcountyhealth.org/behavioral-health/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Will County Health Department</h2>
                                </a>
                            </div>
                            
                            <p>"To prevent disease and promote a healthier environment for
                                all residents, business operators, and visitors. Our agency of
                                professionally trained staff work cohesively to assure public
                                health and safety measures are maintained through services
                                and programs the department provides based on the needs of
                                the community."
                                
                            </p>
                        </div>
                    </div>
                    <div className="ResourcesTextDiv">

                        <div className="MedicalResourceDiv">
                            <h1>Medical</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="http://willgrundymedicalclinic.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Will Grundy Medical Clinic</h2>
                                </a>
                            </div>
                            
                            <p>"We work to accomplish [our] mission by providing
                                comprehensive, free healthcare to over 1,000 patients each year
                                who are low income and aren’t eligible for medical
                                entitlements."
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.auntmarthas.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Aunt Martha's Health and Wellness</h2>
                                </a>
                            </div>
                            
                            <p>"Aunt Martha’s Health and Wellness boldly commits to
                                supporting the well-being of our communities, ensuring equity in
                                access and delivering exceptional care inspired by a culture of
                                innovation."
                                
                            </p>
                        </div>


                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.lockporttownship.com/programs/medical_closet.php" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Medical Closet</h2>
                                </a>
                            </div>
                            
                            <p>"Residents of Lockport Township may contact the Supervisor’s
                                Office to borrow medical equipment on a temporary basis. The
                                use of the equipment is free of charge and it may be picked up at
                                the Supervisor’s Office. We are accepting medical donations at
                                this time."
                               
                            </p>
                        </div>
                       

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://willcountyhealth.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Will County Heath Department & Community Health Center</h2>
                                </a>
                            </div>
                            
                            <p>The Will County Health Department and Community Health
                                Center’s Mission is to prevent disease and promote a healthier
                                environment for all residents, business operators, and visitors.
                                
                            </p>
                        </div>
                    </div>













                </div>




                <div className="ResourceCol2">
                    <div className="ResourcesTextDiv FamilyResourceDiv">
                      
                            <h1>Family Services</h1>
                            <div className="ResourceName">
                            <a className="ResourceLink" href="https://www.lockporttownship.com/programs/salvation_army.php" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Salvation Army</h2>
                                </a>
                            </div>
                            
                            <p>"Salvation Army Service Units provide individual and
                                emergency service according to general polices and the
                                decisions of local committees."
                               
                            </p>
                    

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                            <a className="ResourceLink" href="https://www.lockporttownship.com/services/will_county_animal_control.php" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Animal Control</h2>
                                </a>
                            </div>
                            
                            <p>"The Lockport Township unincorporated areas will be served
                                by the Will County Animal Control, To report a stray dog or
                                lost dog, click here."
                                
                            </p>
                        </div>
                    </div>

                    <div className="ResourcesTextDiv">
                        <div className="FoodResourceDiv">
                            <h1>Food</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.boh2016.org/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Bags of Hope</h2>
                                </a>
                            </div>
                            
                            <p>"Bags of Hope is a non-profit organization with a mission to
                                make sure each student enters school ready to learn. This
                                means having breakfast!
                                Working directly with social workers from schools in
                                Lockport and Plainfield, Bags of Hope provides backpacks of
                                food for students to take home.
                                With the help of YOU, members of our community, we were
                                able to donate not only breakfast food, but food that
                                children and their families can enjoy throughout the day!
                             
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.facebook.com/LockportFISHFoodPantry01/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport FISH Food Pantry</h2>
                                </a>
                            </div>
                            
                            <p>"We are a non-profit, non denominational Christian
                                organization, operated solely by volunteers to minister to
                                the hungry within Lockport & Homer Townships."
                               
                                                            
                            </p>
                        </div>


                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.lockportpark.org/location/fairmont-community-center/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Fairmont Food Pantry</h2>
                                </a>
                            </div>
                            
                            <p>525 Barry Avenue, Lockport IL 60441, Every Thursday,
                                excluding holidays, 9 AM-11 AM.
                            </p>
                        </div>
                       
                    </div>

                    <div className="ResourcesTextDiv">
                        <div className="HousingResourceDiv">
                            <h1>Housing</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.lockporttownship.com/seniors/senior_housing." target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Township</h2>
                                </a>
                            </div>
                            
                            <p>In the fall of 2001, "Gale Gardens" was ready for residence.
                                The complex is the product of a partnership between
                                Lockport Township, the City of Lockport, and the Greystone
                                Group, a private developer. It is situated about 200 yards
                                southwest of the intersection of Farrell Road and Division
                                Street.
                               
                            </p>
                        </div>

                       

                    </div>



                    <div className="ResourcesTextDiv">
                        <div className="ElderlyResourceDiv">
                            <h1>Elderly</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.homewatchcaregivers.com/lockport/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Homewatch Caregivers</h2>
                                </a>
                            </div>
                            
                            <p>Home care is intended to help you or someone you care for
                                sustain and maintain quality of life, all while ensuring
                                safety in the comfort of home, wherever home may be.
                              
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.lockporttownship.com/seniors/index.php" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Township - Seniors</h2>
                                </a>
                            </div>
                            
                            <p>Provides housing alternatives, in-home care services,
                                support with BEAM Medcaid applications, low-income
                                subsidies, Medicare Part D, energy assistance, and
                                information on any need or worry of an older person might
                                all be covered by the information supplied. Lockport want
                                to make sure that people have the information they need
                                to make educated decisions and to make it easier for them
                                to access services.
                              
                            </p>
                        </div>

                    </div>




                    <div className="ResourcesTextDiv">
                        <div className="SubsResourceDiv">
                            <h1>Substance Abuse</h1>
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://www.homewatchcaregivers.com/lockport/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lifestance</h2>
                                </a>
                            </div>
                            
                            <p>Home care is intended to help you or someone you care for
                                sustain and maintain quality of life, all while ensuring
                                safety in the comfort of home, wherever home may be.
                               
                            </p>
                        </div>

                        <div className="ResourceDiv">
                            <div className="ResourceName">
                                <a className="ResourceLink" href="https://lifestance.com/location/lockport-il-16221-w-159th-st/" target={"_blank"} rel="noopener noreferrer">
                                <img src={heart_icon} alt=''/>
                                <h2 className="fw5 f3 mt1 mb1">Lockport Township - Seniors</h2>
                                </a>
                            </div>
                            
                            <p>There are drug rehabilitation facilities run by LifeStance
                                Health all around the state of Illinois and the nation.
                                Leading the way in behavioral, mental, and emotional
                                wellbeing is the LifeStance Health Family. The presence of a
                                LifeStance drug and alcohol addiction treatment center in
                                Lockport, Illinois, is a blessing for the local population.

                             
                            </p>
                        </div>

                    </div>








                </div>


            </div>






            </div>
      
            
        
  
    )

};


export default Resources;