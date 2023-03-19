import React from "react";
import SupportLinkManagementTableRow from "./SupportLinkManagementTableRow";

const LinkMangementTableBody =({linkList, setStateLoaded}) =>{

    if(linkList.length === 0){
       return <p>No Results.</p>
    } else {
        return (
            <table>
                {console.log(linkList)}
                <thead>
                        <tr >
                            <th>Enable</th>
                            <th>Id #</th>
                            <th>Site Name</th>
                            <th>Site URL</th>
                            <th>Created</th>
                        </tr>
                </thead>
                <tbody>
                {
                        linkList.map((user, i) =>{
                            return (
                            <SupportLinkManagementTableRow 
                                key={linkList[i].id} 
                                id={linkList[i].id} 
                                site_name={linkList[i].site_name} 
                                url={linkList[i].url} 
                                created={linkList[i].created} 
                                setStateLoaded ={setStateLoaded}
                                />
                            );
                    })
                    }
                </tbody>
            </table>
        );}
}

export default LinkMangementTableBody;