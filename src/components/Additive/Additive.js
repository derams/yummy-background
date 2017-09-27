import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';
import Unload from '../Unload/Unload.js'
import './additive.css'
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class Additive extends Component {
  render(){
    return(
      <div className="additive">
        <Upload {...props}>
         <Button>
           <Icon type="upload" /> 上传图片
         </Button>
       </Upload>
       <Unload/>
      </div>

    )
  }
}

export default Additive
