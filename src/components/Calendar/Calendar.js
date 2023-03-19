import React, {Component} from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'  
import dayGridPlugin from '@fullcalendar/daygrid'  
import interactionPlugin from "@fullcalendar/interaction"  

const Event = props => (
    <article>
    <h2> {props.newEvent["title"]}</h2>
    <div>From: {props.newEvent["start"].slice(0,props.newEvent["start"].indexOf("T"))} to {props.newEvent["end"].slice(0,props.newEvent["end"].indexOf("T"))}</div>
    <div>{props.newEvent["start"].slice(props.newEvent["start"].indexOf("T")+1,props.newEvent["start"].length)} to {props.newEvent["end"].slice(props.newEvent["end"].indexOf("T")+1,props.newEvent["end"].length)}</div>    
    <div>At: {props.newEvent["location"]}</div>
    <div>{props.newEvent["street"]}, {props.newEvent["state"]} {props.newEvent["zip"]}</div>
    <div>{props.newEvent["extraInfo"]}</div>   
    </article>
)


export default class Calendar extends  Component{
    constructor(props){
        super(props);

        this.onChangeEvents = this.onChangeEvents.bind(this)
        this.onChangeShowEvents = this.onChangeShowEvents.bind(this);

        this.state = {
            events: props.value || [],
            showEvents: props.value || [ ]
        }
    }

    onChangeEvents(e){
        this.setState({ events : e});
       
    }

    onChangeShowEvents(e){
        this.setState({showEvents: e});
        console.log("showEvents " + JSON.stringify(this.state.showEvents));
    }

    async componentDidMount(){
        const data = await axios.get('http://localhost:5001/showEvents/') 
       
        this.onChangeEvents(data.data);
    }

    displayEvents(){
        
        return this.state.showEvents.map(e =>{
            return <Event newEvent={e} key={e._id}/>;
        });
    }

    handleDateClick = (e) => {
           var tempArray = []
           var index = e.dateStr.toString(e.dateStr.indexOf("T")) ;
           this.state.events.map(element => {
                let dateStart = element.start.slice(0,element.start.indexOf("T")) ;
                let dateEnd = element.end.slice(0,element.end.indexOf("T")) ;
                console.log("index: " + index + " dateStart: " + dateStart + " dateEnd: " + dateEnd);
                if(new Date(index) >= new Date(dateStart) && new Date(index) <= new Date(dateEnd)){
                    console.log("true " + element);
                    tempArray.push(element)
                    
                }
                else{
                    console.log("false");
                }

           });
 
            this.onChangeShowEvents(tempArray);
    }

    addEvents(){
        var formattedEvents = [];
        this.state.events.map(element => {
           
            formattedEvents.push({'title': element.title, 'start':element.start, 'end':element.end});
        });

        return formattedEvents;
    }

    render(){
        
        return(      
            <div className="container">
            <h2>Community Events</h2>     
            <main>
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    dateClick={ this.handleDateClick }
                    initialView="dayGridMonth"
                    events = {this.addEvents()}
                />
                <p>For more information, click on the date containing the event you're curious about.</p>
            </main>
            <section>
                 
            </section>
                {this.displayEvents()}
            </div>
        );
        
    }
}