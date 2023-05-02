import React, {Component} from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'  
import dayGridPlugin from '@fullcalendar/daygrid'  
import interactionPlugin from "@fullcalendar/interaction"  
import {  Link } from 'react-router-dom';

const Event = props => (
    <article  className='ba b--red pa4 mb2'>
  
    <div style={{textAlign:'left',     textDecorationLine: 'underline',
    textDecorationColor: 'blue', textDecorationStyle: 'dotted'}} className="fw7"> 
    {new Date(props.newEvent["start"]).toLocaleString('en-us',{month:'long', day: 'numeric' })} </div>
       

    <div style={{textAlign:'left',      textDecorationLine: 'underline',
    textDecorationColor: 'blue', textDecorationStyle: 'dotted'}}>{props.newEvent["title"]}</div>   
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
            return <Link to={e._id} className="link dim"><Event newEvent={e} key={e._id}/></Link>;
        });
    }

    handleDateClick = (e) => {
           var tempArray = []
           var index = e.dateStr.toString(e.dateStr.indexOf("T")) ;
           this.state.events.map(element => {
                let dateStart = element.start.slice(0,element.start.indexOf("T")) ;
                let dateEnd = element.end.slice(0,element.end.indexOf("T")) ;
               
                if(new Date(index) >= new Date(dateStart) && new Date(index) <= new Date(dateEnd)){

                    tempArray.push(element)
                    
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
            <div className="container pa6 w-100  mv0 ph0 block">
            <img src="./assets/header.png" alt="calendar banner" className='w-100 '/>
            <main  className='ph4 w-100 '>
            <section className="fl pa4 w-25 ">
                <h2 className='blue'>EVENTS</h2>
                <p>For more information, click on the date containing the event you're curious about.</p>
                {this.displayEvents()}                 
            </section>                
                <div className='fl w-75 ' ><FullCalendar 
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    dateClick={ this.handleDateClick }
                    initialView="dayGridMonth"
                    events = {this.addEvents()}
                   
                    displayEventTime = {false}

                />

                </div>
         

             </main>
            </div>
        );
        
    }
}