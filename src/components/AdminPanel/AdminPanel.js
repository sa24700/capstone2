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
            </ul>
        </div>
    );
}

export default AdminPanel;