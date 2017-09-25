import React, { Component } from 'react'
import { Table, Icon } from 'antd';
const columns = [{
title: '海报',
dataIndex: 'name',
key: '1',

}, {
title: '菜品名称',
dataIndex: 'age',
key: '2',
}, {
title: '描述',
dataIndex: 'address',
key: '3',
}, {
title: '价格',
dataIndex: 'address',
key: '4',
}, {
title: '操作',
key: '5',
}]
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
