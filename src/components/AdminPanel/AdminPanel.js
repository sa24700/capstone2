import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function AdminPanel(){
    return (
        <div>
            <h1>Administrator Panel</h1>
            <ul>
                <li className="f5 link dim white underline pa3 pointer"><Link to="/download-emails">Download NewsLetter</Link></li>
                <li className="f5 link dim white underline pa3 pointer"><Link to="/user-management">User Management</Link></li>
                <li className="f5 link dim white underline pa3 pointer"><Link to="/support-link-management">Support Link Management</Link></li>
                <li className="f5 link dim white underline pa3 pointer"><Link to="/createEvent">Create New Event</Link></li>
                <li className="f5 link dim white underline pa3 pointer"><Link to="/create-new-post">Create New Blog Post</Link></li>            
                <li className="f5 link dim white underline pa3 pointer"><Link to="/send-newsletter-post">Create New Newsletter Post</Link></li>               
                <li className="f5 link dim white underline pa3 pointer"><Link to="/AddPhoto">Upload Photo</Link></li>
            </ul>
        </div>
    );
}

export default AdminPanel;