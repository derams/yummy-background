import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.js'
import Home from './components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}/>
        <Route path='/dashboard' render={()=>{
            if(!window.localStorage.getItem('userId')){
              return <Redirect to='/' />
            }else{
              return <Dashboard />
            }
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
