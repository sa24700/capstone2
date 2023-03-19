import React from "react";

function SearchBox({emailSearchChange}) {
    return (
        <div>
           <p>Search users by:</p>
            <input 
                type='search' 
                placeHolder='Email'
                onChange={e => emailSearchChange(e)}
            />
        </div>

    );
}

export default SearchBox;