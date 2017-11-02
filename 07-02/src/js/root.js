import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'
import 'antd/dist/antd.css'
class Root extends React.Component{
  render(){
    return (
      // 这里替换了之前的 Index，变成了程序的入口
      <div>

      </div>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'))