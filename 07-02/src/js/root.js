import React from 'react'
import ReactDOM from 'react-dom'
import Index from './index'
import ComponentList from './components/List'

class Root extends React.Component{
  render(){
    return (
      // 这里替换了之前的 Index，变成了程序的入口
      <ComponentList/>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('example'))