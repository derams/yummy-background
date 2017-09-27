import React, { Component } from 'react'
import Login from '../Login/Login.js'
import Setting from '../../setting'
import { message } from 'antd';

class Home extends Component {
  login = (data) => {
    console.log(data);
    if(data.password!==Setting.user.password || data.username!==Setting.user.username) {
      return message.error('This is a message of error')
    }
    window.localStorage.setItem('userId', Setting.user.userId)
    this.props.history.push('/dashboard/additive')
  }
  render(){
    return(
      <div className="home">
        <Login login={this.login}/>
      </div>
    )
  }
}

export default Home
