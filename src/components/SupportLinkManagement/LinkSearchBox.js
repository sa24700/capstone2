import React from "react";

function LinkSearchBox({onLinkSearchChanged}) {
    return (
        <div>
            <input 
                type='search' 
                placeHolder='Site Name'
                onChange={e => onLinkSearchChanged(e)}
            />
        </div>

    );
}

export default LinkSearchBox;