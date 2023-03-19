import React, { useEffect, useState } from "react";
import UserMangementTableBody from "./UserMangementTableBody"
import UserMangementTableRow from "./UserMangementTableRow";
import SearchBox from "./SearchBox"

const UserManagement =() =>{
    const [userList, setUserList]= useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])

    const onEmailSearchChange = (e) => {
        console.log(e.target.value)
        const filteredUsers = userList.filter(user =>{
            return user.email.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFilteredUsers(filteredUsers)
        console.log(filteredUsers);
    }

    useEffect(() =>{
        if(!loaded){
            <div>
                <h1>User Management</h1>
                <p>Loading Content.....</p>
            </div>
            
        }
        fetch('http://localhost:5001/users',{
                        method: 'get',
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(data => { 
                        return data.json();
                    })
                    .then(jsonData => {
                        setUserList(() => { return jsonData })
                        setFilteredUsers(() =>{return jsonData})
                        setLoaded(() =>{return true});
                    });
    },[loaded])
    
    if(!loaded){
        return (
            <div>
                <h1>User Management</h1>
                <p>Loading content...</p>
            </div>
        )
        
    } else {
        return (
            <div>
                <h1>User Management</h1>
                <p>Update and delete user records. IDs and join dates should not be edited</p>
                <p> Permissions are: 1 = User, 2 = Blogger, and 3 = Admin.
                    Give Admin to only a select, extremely trusted few.
                </p>
                <SearchBox emailSearchChange ={onEmailSearchChange}/>
                    <UserMangementTableBody userList ={filteredUsers} setStateLoaded = {setLoaded}/>
            </div>
        );
    }
}

export default UserManagement;