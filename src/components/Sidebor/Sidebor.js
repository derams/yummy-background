import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './sidebor.css'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Sidebor extends Component {
  render(){
    return(
      <div className="sidebor">
        <h2>吮指后台</h2>
        <Menu
     onClick={this.handleClick}
     style={{ width: 200 }}
     defaultSelectedKeys={['1']}
     defaultOpenKeys={['sub1']}
     mode="inline"
   >
     <SubMenu key="sub1" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
         <Menu.Item key="1">代发货</Menu.Item>
       <Menu.Item key="2">已完成</Menu.Item>
     </SubMenu>
     <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>甜品管理</span></span>}>
       <Menu.Item key="5">所有甜点</Menu.Item>
     <Menu.Item key="6"><Link to='/additive'>新建甜点</Link></Menu.Item>
     </SubMenu>
   </Menu>
   <div className="logout">
     <button>登出</button>
     <p></p>
   </div>
      </div>
    )
  }
}

export default Sidebor
