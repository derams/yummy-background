import React, { Component } from 'react'
import { Table, Icon } from 'antd';
const columns = [
  {
      title: '菜品名称',
      dataIndex: 'name',
      key: '1',
  },
  {
      title: '下单时间',
      dataIndex: 'age',
      key: '2',
  },
  {
      title: '顾客名',
      dataIndex: 'address',
      key: '3',
  },
  {
      title: '操作',
      key: '5',
  }
]
class All extends Component {
  render(){

    return(
      <div className="all">
        <span>共0条</span>
        <Table columns={columns}  />
      </div>
    )
  }
}

export default All
