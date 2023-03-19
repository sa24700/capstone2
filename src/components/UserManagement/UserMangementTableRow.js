import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserMangementTableRow = (props) => {
    const id = useRef(props.id);
    const joined = useRef(props.joined);
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [oldEmail, setOldEmail] = useState(props.email);
    const [permission, setPermission] = useState(props.permission);
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
        await fetch('http://localhost:5001/updateUser',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id.current.value,
                first_name: firstName,
                last_name: lastName,
                email: email,
                permission: permission,
                old_email: oldEmail
            })
         }).then(response => response.json())
         .then(() => {
            window.alert(`Successfuly updated ${firstName} ${lastName}'s account`, );
            switchEnabledStatus();
            switchCheckedStatus();
            props.setStateLoaded(false)
         })
    }

    async function deleteDow() {
        await fetch('http://localhost:5001/deleteUser',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
        })
        }).then(response => response.json())
        .then(() => {
        window.alert(`Successfuly deleted ${firstName} ${lastName}'s account` );
        switchEnabledStatus();
        switchCheckedStatus();
        props.setStateLoaded(false)
        })
    }

    function onFirstNameInputChange(e) {
        setFirstName(e.target.value)
    }

    function onLastNameInputChange(e) {
        setLastName(e.target.value)
    }

    function onEmailInputChange(e) {
        setEmail(e.target.value)
    }

    function onPermissionInputChange(e) {
        setPermission(e.target.value)
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
                    className='first-name' 
                    type='text' 
                    disabled={enabled}
                    value={firstName}
                    onChange={e =>{onFirstNameInputChange(e)}}
                />
            </td>
            <td>
                <input 
                    className='last-name' 
                    type='text' 
                    disabled={enabled}
                    value={lastName}
                    onChange={e =>{onLastNameInputChange(e)}}
                />
            </td>
            <td>
                <input 
                    className='email' 
                    type='email' 
                    disabled={enabled}
                    value={email}
                    onChange={e =>{onEmailInputChange(e)}}
                />
            </td>
            <td>
                <input 
                    className='permission' 
                    type='text' 
                    disabled={enabled} 
                    value={permission}
                    onChange={e =>{onPermissionInputChange(e)}}
                />
                </td>
            <td>
                <input 
                    className='joined' 
                    type='date/time'
                    disabled='disabled'
                    value={props.joined}
                    ref={joined}
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
                        const confirmedDelete = window.confirm(`Are you sure you want to delete ${firstName} ${lastName}'s account`);
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

export default UserMangementTableRow;