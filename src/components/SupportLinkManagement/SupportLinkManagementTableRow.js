import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportLinkManagementTableRow = (props) => {
    const id = useRef(props.id);
    const created = useRef(props.created);
    const [siteName, setSiteName] = useState(props.site_name);
    const [siteUrl, setSiteUrl] = useState(props.url);
    const [enabled, setEnabled] = useState('disabled')
    const [checked, setChecked] = useState('')

    const navigate = useNavigate()

    function switchEnabledStatus() {
        (enabled === 'disabled') ? setEnabled('') : setEnabled('disabled');   
    }

    function switchCheckedStatus(e) {
        (!checked) ? setChecked('checked') : setChecked('');
    }

    async function updateRow() {
        await fetch('http://localhost:5001/updateSupportLink',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id.current.value,
                site_name: siteName,
                url: siteUrl
            })
         }).then(response => response.json())
         .then(() => {
            window.alert(`Successfuly updated ${siteName} with ${siteUrl} url`, );
            switchEnabledStatus();
            switchCheckedStatus();
            props.setStateLoaded(false)
         })
    }

    async function deleteDow() {
        await fetch('http://localhost:5001/deleteSupportLink',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: id.current.value
        })
        }).then(response => response.json())
        .then(() => {
        window.alert(`Successfuly deleted ${siteName} with ${siteUrl}'s url` );
        switchEnabledStatus();
        switchCheckedStatus();
        props.setStateLoaded(false)
        })
    }

    function onSiteNameInputChanged(e) {
        setSiteName(e.target.value)
    }

    function onSiteUrlInputChanged(e) {
        setSiteUrl(e.target.value)
    }

    return (
        
        <tr>
            <td>
                <input 
                    type='checkbox' 
                    onChange={() =>{switchEnabledStatus()}}
                    checked={checked}
                    onClick={e => switchCheckedStatus()}
                />
            </td>
            <td>
                <input 
                    className='id' 
                    type='text' 
                    disabled='disabled' 
                    value={props.id}
                    ref={id}
                />
            </td>
            <td>
                <input 
                    className='site-name' 
                    type='text' 
                    disabled={enabled}
                    value={siteName}
                    onChange={e =>{onSiteNameInputChanged(e)}}
                />
            </td>
            <td>
                <input 
                    className='site-url' 
                    type='text' 
                    disabled={enabled}
                    value={siteUrl}
                    onChange={e =>{onSiteUrlInputChanged(e)}}
                />
            </td>
            <td>
                <input 
                    className='created' 
                    type='date/time'
                    disabled='disabled'
                    value={props.created}
                    ref={created}
                />
            </td>
            <td>
                <button 
                    disabled={enabled} 
                    onClick={() =>{updateRow()}}
                >Update</button>
                <button 
                    disabled={enabled} 
                    onClick={() =>{
                        const confirmedDelete = window.confirm(`Are you sure you want to delete ${siteName} with ${siteUrl} url`);
                        if(confirmedDelete){ 
                            deleteDow()
                        }
                    }
                }
                >Delete</button>
            </td>
        </tr>
    );
}

export default SupportLinkManagementTableRow;