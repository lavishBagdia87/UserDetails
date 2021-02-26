import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../userForm/UserForm';
import UserList from '../userList/UserList';

const Root = (props)=>{

    return (
        <React.Fragment>
            <div><UserForm/></div>
            <div><UserList/></div>
        
        </React.Fragment>
    )
}
export default Root;