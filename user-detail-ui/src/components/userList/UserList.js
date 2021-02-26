import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {Row,Table,Col} from 'antd';

const UserList = (props)=>{
    
    const users = [{
        id:"1",
        firstName:"Lavish",
        lastName:"Bagdia",
        emailId:"lavishb.isme11@gmail.com"
    },{
        id:"2",
        firstName:"Ravi",
        lastName:"Sharm",
        emailId:"ravis.isme11@gmail.com"
    },{
        id:"3",
        firstName:"Mohit",
        lastName:"Gupta",
        emailId:"lavishb.isme11@gmail.com"
    }]
    //const [users, setUsers] = useState([])
    const columnDetails = [
        {
            title:"First Name",
            dataIndex:"firstName",
            key:"firstName",
        },
        {
            title:"Last Name",
            dataIndex:"lastName",
            key:"lastName",
        },        
        {
            title:"EmailId",
            dataIndex:"emailId",
            key:"emailId",
        }
    ]

    return (
        <React.Fragment>
             <Table dataSource={users} columns={columnDetails} />
        </React.Fragment>
    )
}
export default UserList;