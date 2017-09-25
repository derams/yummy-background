import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'
const FormItem = Form.Item;

class Login extends Component {
  state = {
    username:'',
    password:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username : this.state.username,
      password : this.state.password
    }
    this.props.login(data)
  }
  handleUsernameChange = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  render(){
    return(
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  onChange={this.handleUsernameChange} value={this.state.username}
               placeholder="Username" />
          </FormItem>
          <FormItem>
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"
                  onChange={this.handlePasswordChange} value={this.state.password}
            />
          </FormItem>
          <FormItem>
              <Checkbox>Remember me</Checkbox>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Login
