import React,{useState,useEffect} from 'react';
import {Button,Form,Input,Alert} from 'antd';
import { connect } from 'react-redux';
import { actions, connectToServer } from "../../redux/actions/userActions";

import './UserForm.css'
import { useForm } from 'antd/lib/form/Form';

const UserForm = (props)=>{

const  [form] = useForm();
const [message, setMessage] = useState({state:true,value:""})
const [successMessage, setSuccessMessage] = useState({state:false,value:"User added sucssfully."})
const saveUser = (values)=>{
        let isFormValid = true;
        if(!values.firstName){
            setMessage({state:false,value:"First name is requried"})   
            isFormValid = false;
        }
        else if(!values.lastName){
            setMessage({state:false,value:"Last name is requried"})   
            isFormValid = false;
        }
        else if(!values.emailId){
            setMessage({state:false,value:"Email is requried"})  
            isFormValid = false;
        }else if(values.emailId !== ""){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(values.emailId).toLowerCase())){
                setMessage({state:false,value:"Email is not valid."})      
                isFormValid = false;
            }
        }
        if(isFormValid){
            setMessage({state:true,value:""})  
            props.connectToServer(actions.SAVE_USER,'/users','post',values);
        }
      //apply validation for the form. 
}
const clearForm =()=>{
    setSuccessMessage({...successMessage,...{state:false}});
    setMessage({state:true,value:""})  
    form.resetFields();
}

useEffect(()=>{
    if(props.userId){
        setSuccessMessage({...successMessage,...{state:true}})
        props.connectToServer(actions.GET_USER,'/users','get',null);
    }
},[props.userId])

    return (
        <React.Fragment>
            <div className="form-container">
                <div className="title-message">Please add user here</div>
            <div className={message.state?'hide':'show'}>
                <Alert type="error" message={message.value} banner />
            </div>
            <div className={successMessage.state?'show':'hide'}> <Alert type="success" message={successMessage.value} banner /></div>
            <Form form={form} name="userDetail" onFinish={saveUser} >
                <Form.Item name="firstName">
                    <Input size="large" placeholder="First name"/>
                </Form.Item>
                
                <Form.Item name="lastName" >
                    <Input size="large" placeholder="Last name" />
                </Form.Item>
               
                <Form.Item name="emailId">
                    <Input size="large" placeholder="email-Id"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primany" htmlType="submit">save</Button>
                    <Button onClick={clearForm}>Clear</Button>
                </Form.Item>
            </Form>
           </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state)=>({
    userId:state.response.userId
})
const mapDispatchToProps = (dispatch)=>{
    return ({
        connectToServer:(action,url,methodType,param)=>dispatch(connectToServer(action,url,methodType,param))
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(UserForm)
