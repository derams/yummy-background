import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './unload.css'
const FormItem = Form.Item;

class Unload extends Component {
  render(){
    return(
      <div className="unload">
        <Form onSubmit={this.handleSubmit} className="login-form">
           <FormItem>
               <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />
           </FormItem>
           <FormItem>
               <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="描述" />
           </FormItem>
           <FormItem>
               <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="价格" />
           </FormItem>
           <FormItem>
             <Button type="primary" htmlType="submit" className="login-form-button">
               添加甜点
             </Button>
           </FormItem>
         </Form>
      </div>
    )
  }
}

export default Unload
