import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import {  withRouter } from 'react-router-dom'
import './unload.css'
import axios from 'axios'

class Unload extends Component {
  handleSubmit = (e) => {
     e.preventDefault()
     let data = this.props.form.getFieldsValue()
     // axios
     let unFilled = Object.keys(data).filter(
       prop => {
          return (!data[prop])
       }
     )
     if(unFilled.length === 0 ) {
       const allData = { ...data,
         post: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460'
       }
       axios.post(`http://localhost:3008/posts`, allData).then(
         res => {
           console.log(res.data)
           this.props.history.push('/dashboard/all')
         }
       )
     } else {
       message.error("请填入全部信息")
     }
   }

   hasErrors = (fieldsError) => {
     return Object.keys(fieldsError).some(field => fieldsError[field])
   }
  render(){
    const { getFieldDecorator, } = this.props.form;
    return(
      <div className="unload">

        <Form onSubmit={this.handleSubmit} className="login-form">
           <Form.Item>
             {getFieldDecorator('name', {
           rules: [{ required: true, message: 'Please input your username!' }],
         })(
               <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />
               )}
           </Form.Item>
           <Form.Item>
             {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
               <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="描述" />
               )}
           </Form.Item>
           <Form.Item>
             {getFieldDecorator('price')(
               <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />}  placeholder="价格" />
               )}
           </Form.Item>
           <Form.Item>
             <Button type="primary" htmlType="submit" className="login-form-button">
               添加甜点
             </Button>
           </Form.Item>
         </Form>
      </div>
    )
  }
}

export default Form.create()(withRouter(Unload))
