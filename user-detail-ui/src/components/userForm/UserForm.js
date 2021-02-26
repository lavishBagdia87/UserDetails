import React from 'react';
import {Button,Form,Input,Alert} from 'antd';
import { connect } from 'react-redux';

const UserForm = (props)=>{
const [form] = Form.useForm();

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: 'not a valid email!',
    },
  };

const saveUser = (user)=>{
    form.validateFields().then(values =>{
      console.log(values)  
      //apply validation for the form. 
    });
}

    return (
        <React.Fragment>
            <Form form={form} name="userDetail" onFinish={saveUser} validateMessages={validateMessages}>
                
                <Form.Item name="First-Name" label="First Name">
                    <Input size="large" placeholder="First name" rules={[{required: true}]}/>
                </Form.Item>
                
                <Form.Item name="Last-Name" label="Last Name">
                    <Input size="large" placeholder="Last name" rules={[{required: true}]}/>
                </Form.Item>
               
                <Form.Item name="email-Id" label="Email Id">
                    <Input size="large" placeholder="email-Id" rules={[{type: 'email'}]}/>
                </Form.Item>
                <Form.Item name="email-Id">
                    <Button type="primany" htmlType="submit">save Data</Button>
                </Form.Item>
            </Form>
           
        </React.Fragment>
    )
}
export default UserForm;