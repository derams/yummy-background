import React, { Component } from 'react'
import './dashboard.css'
import { Layout } from 'antd';
import Sidebor from '../Sidebor/Sidebor.js'
import Additive from '../Additive/Additive.js'
import All from '../All/All.js'
import Order from '../Order/Order.js'
import { HashRouter as Router, Route } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;

class Dashboard extends Component {
  render(){
    return(
      <Router>
      <div className="dashboard">
        <Layout>
        <Sider style={{backgroundColor:'white'}}><Sidebor/></Sider>
          <Layout>
            <Header>Header</Header>
          <Content style={{backgroundColor:'white'}}>
              <Route pach='/additive' component={Additive}/>
            <All/>
          <Order/>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
    )
  }
}

export default Dashboard
