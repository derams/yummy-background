import React, { Component } from 'react'
import { Table, message } from 'antd';
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Poster = styled.img`
  width: 50px;
`

class All extends Component {

  state = {
    content:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3008/posts').then(res=>{
      console.log(res.data);
      this.setState({
        content:res.data
      })
    })
  }
  delete = (e,id) => {
    e.preventDefault()
    axios.delete(`http://localhost:3008/posts/${id}`).then(res=>{
      message.info('删除成功！！！')
      console.log(res.data);
      this.setState({
        content:this.state.content.filter(t=>t.id!==id)
      })
    })
  }
  render(){
    const columns = [{
        title: '海报',
        dataIndex: 'post',
        key: 'post',
        render: (text) =>
          <Poster src={text} alt='poster' />
      },
      {
        title: '菜品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '描述',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '操作',
        dataIndex:'id',
        key: 'id',
        render: (id) => <Link to="" onClick={(e)=>this.delete(e,id)}>删除</Link>,
      }
    ]
    return(
      <div className="all">
        <span>共0条</span>
      <Table dataSource={this.state.content} columns={columns} rowKey={record=>record.id}/>
      </div>
    )
  }
}

export default All
