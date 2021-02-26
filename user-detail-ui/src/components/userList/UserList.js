import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {Row,Table,Col} from 'antd';
import { actions, connectToServer } from "../../redux/actions/userActions";

const UserList = (props)=>{
    
    const [users, setUsers] = useState([])
    
    /** get the list of user. */
    useEffect(()=>{
        props.connectToServer(actions.GET_USER,'/users','get',null);
    },[])
    /** Update the list of users.*/
    useEffect(()=>{
        if(props.users){
            setUsers(   props.users.map(user=>{
                    return {...user,key:user._id}
                    
                } ));
        }
    },[props.users])

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
const mapStateToProps = (state)=>({
    users:state.response.userList
})
const mapDispatchToProps = (dispatch)=>{
    return ({
        connectToServer:(action,url,methodType,param)=>dispatch(connectToServer(action,url,methodType,param))
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)
