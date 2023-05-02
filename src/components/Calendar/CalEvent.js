
import axios from 'axios'; 
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
 
 
const  CalEvent =   ( ) => {
 
     const {key} = useParams();
     const [event, setEvent] = useState(null);
     const [loading, setLoading] = useState(true);

     function displayEvent(){
        
        return (
 
            <main className='bg-blue pa2 w-50 center flex flex-column mv4'  >
               
                <h2 className='dark-red'>{event.title}</h2>
                <div >
                    { event.language == 'spanish' ?  <div><p>{new Date(event.start).toLocaleString('en-US',{month:'long', day:'numeric', year:'numeric'})}  - {new Date(event.end).toLocaleString('en-US',{month:'long', day:'numeric', year:'numeric'})}</p> </div>
                    :<div><p>{new Date(event.start).toLocaleString('en-US',{month:'long', day:'numeric', year:'numeric'})}  - {new Date(event.end).toLocaleString('en-US',{month:'long', day:'numeric', year:'numeric'})}</p></div>}
                    <p>{new Date(event.start).toLocaleTimeString('en-US')} - {new Date(event.end).toLocaleTimeString('en-US')}</p>
                </div>
                <div>
                    <p>{event.location}</p>
                    <p>{event.street}, {event.city}, {event.state} {event.zip}</p>
                </div>
                <div>
                    <p>{event.extraInfo}</p>
                </div>
            </main>
 
        )

     }

      useEffect( () => {
            async function getEventDetails(){
                try{            
                    await axios.get('http://localhost:5001/getEvent/'+key).then(res=>{                      
                        setEvent(res.data[0]);
                        setLoading(false);                    
                  });     
              }
              catch(err){
                  console.log(err);
              }
            }
            getEventDetails()
       
    }, []) 
    

        return (
            <div>
                 {loading ? <div>Loading . . .</div> : displayEvent()}
            </div>
        )
        
     
}

export default  CalEvent ;