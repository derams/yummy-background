import React, { Component } from 'react'
import Login from '../Login/Login.js'
import Setting from '../../setting'

class Home extends Component {
  login = (data) => {
    console.log(data);
    if(data.password!==Setting.user.password || data.username!==Setting.user.username) return
    this.props.history.push('/dashboard')
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
