import React, { Component } from 'react'
import './dashboard.css'
import { Layout } from 'antd';
import Sidebor from '../Sidebor/Sidebor.js'
import Additive from '../Additive/Additive.js'
import All from '../All/All.js'
import NotFount from '../NotFount/NotFount.js'
import Order from '../Order/Order.js'
import { HashRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  logout = () => {
    window.localStorage.removeItem('userId')
    this.props.history.push('/')
  }
  render(){
    return(
      <Router>
      <div className="dashboard">
        <Layout>
        <Sider style={{backgroundColor:'white'}}><Sidebor onLogout={this.
          logout}/></Sider>
          <Layout>
            <Header>Header</Header>
          <Content style={{backgroundColor:'white'}}>
            <Switch>
              <Route path='/dashboard/additive' component={Additive}/>
              <Route path='/dashboard/all' component={All}/>
              <Route path='/dashboard/order' component={Order}/>
              <Route component={NotFount}/>
            </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
    )
  }
}

export default withRouter(Dashboard)
