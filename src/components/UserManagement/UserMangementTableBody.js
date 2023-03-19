import React from "react";
import UserMangementTableRow from "./UserMangementTableRow";

const UserMangementTableBody =({userList, setStateLoaded}) =>{

    if(userList.length === 0){
       return <p>No Results.</p>
    } else {
        return (
            <table>
                <thead>
                        <tr >
                            <th>Enable</th>
                            <th>Id #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Permission</th>
                            <th>Join Date</th>
                        </tr>
                </thead>
                <tbody>
                {
                        userList.map((user, i) =>{
                            return (
                            <UserMangementTableRow 
                                key={userList[i].id} 
                                id={userList[i].id} 
                                firstName={userList[i].first_name} 
                                lastName={userList[i].last_name} 
                                email={userList[i].email} 
                                joined={userList[i].joined} 
                                permission={userList[i].permission}
                                setStateLoaded ={setStateLoaded}
                                />
                            );
                    })
                    }
                </tbody>
            </table>
        );
                }
}

export default UserMangementTableBody;