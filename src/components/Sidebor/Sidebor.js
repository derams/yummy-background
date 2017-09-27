import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './sidebor.css'
import { withRouter } from 'react-router-dom'
const SubMenu = Menu.SubMenu;

class Sidebor extends Component {
  state = {
    selectedKeys: this.props.history.location.pathname
  }
  handleClick = (e) => {
    this.props.history.push(e.key)
    this.setState({
      selectedKeys:e.key
    })
  }

  render(){

    return(
      <div className="sidebor">
        <div className="">
        <h2>吮指后台</h2>
        <Menu
           onClick={this.handleClick}
           style={{ width: 200 }}
           defaultSelectedKeys={['1']}
           selectedKeys={[this.state.selectedKeys]}
           defaultOpenKeys={['order','sub2']}
           mode="inline"
         >
           <SubMenu key="order" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
               <Menu.Item key="/dashboard/order">代发货</Menu.Item>
             <Menu.Item key="/dashboard/neworder">已完成</Menu.Item>
           </SubMenu>
           <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>甜品管理</span></span>}>
             <Menu.Item key="/dashboard/all">所有甜点</Menu.Item>
           <Menu.Item key="/dashboard/additive">新建甜点</Menu.Item>
           </SubMenu>
         </Menu>
         </div>
         <div className="logout">
           <button onClick={this.props.onLogout} >登出</button>
         <p>admin</p>
         </div>
      </div>
    )
  }
}

export default withRouter(Sidebor)
