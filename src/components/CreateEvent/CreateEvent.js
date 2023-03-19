import React, { useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
 
import EventItems from '../EventItems/EventItems';
function CreateEvent(){

        const eventNameInput = useRef(null);
        const streetInput = useRef(null);
        const zipInput = useRef(null);
        const cityInput = useRef(null);
        const stateInput = useRef(null);
        const eventLocationInput = useRef(null);
        const startTimeInput = useRef(null);
        const endTimeInput = useRef(null);
        const eventDescriptionInput = useRef(null);
        const itemsInput = useRef(null);
 
        function DisplaySkillForms(){
            let {stateSkillsArray} = this.state;
            
            return(
                <div className="skillforms">
                { stateSkillsArray.map((element, keyID) => (
                  <div className="skillforms" key={keyID}>{element}</div>
                ))}
              </div>
            )
           
           
            
        }


        function onSubmitEvent(e){
            e.preventDefault();
            console.log("in submit");
            var newEvent = {
                userId: "test",
                eventName: eventNameInput.current.value,
                location: eventLocationInput.current.value,                
                startTime: startTimeInput.current.value,
                endTime: endTimeInput.current.value,

                street: streetInput.current.value,
                city: cityInput.current.value,
                myState: stateInput.current.value,
                zip: zipInput.current.value,
                description: eventDescriptionInput.current.value,      
            }

            axios.post('http://localhost:5001/createEvent', newEvent).then(res => console.log(res.data));
            var userId = "test";
            //window.location = "/userLanding:"+ userId;

        }

 

        return (
            <div>
         
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <main className="pa4 black-80">
                    <form className="eventCreator" onSubmit={onSubmitEvent}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Create a New Event</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="eventName">Event Name</label>
                            <input 
                            ref={eventNameInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="eventName"  
                            id="eventName" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="eventLocation">Event Location</label>
                            <input 
                            ref={eventLocationInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="eventLocation"  
                            id="eventLocation" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="street">Street</label>
                            <input 
                            ref={streetInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="street"  
                            id="street" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="city">City</label>
                            <input 
                            ref={cityInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="city"  
                            id="city" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="state">State</label>
                            <input 
                            ref={stateInput}
                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="state"  
                            id="state" />
                        </div>

                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="zip">Zip</label>
                            <input 
                            ref={zipInput}
                            className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" 
                            name="zip"  
                            id="zip" />
                        </div>



                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="eventDescription">Event Description</label>
                            <textarea ref={eventDescriptionInput} 
                                cols="50" rows="30" 
                                type="text" 
                                name="eventDescription"  
                                id="eventDescription"
                                placeholder="This event is . . ."
                               className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100">                                 
                            </textarea>
                        </div>
                        <div className='mv3'>
                            <label className="db fw6 lh-copy f6" for="startTime">startTime</label>
                            <input type="datetime-local" class="form-control" id="startTime" 
                                ref={startTimeInput}   required/>
                        </div>
                        <div className='mv3'>
                            <label for="endTime" className="db fw6 lh-copy f6">End Time</label>
                            <input type="datetime-local" class="form-control" id="endTime" 
                            ref={endTimeInput} required/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>
          
        );
    
}

export default CreateEvent;