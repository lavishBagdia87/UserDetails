import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../userForm/UserForm';
import UserList from '../userList/UserList';
import './Root.css'

const Root = (props)=>{

    return (
        <React.Fragment>
            <div className="root-container">
            <UserForm/>
            <UserList/>
            </div>
        </React.Fragment>
    )
}
export default Root;