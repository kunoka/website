/**
 * Created by harry on 10/10/2017.
 */
var React = require('react')
var ReactDOM = require('react-dom')
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/BodyIndex'
import { Input } from 'antd'
import 'antd/dist/antd.css'

class Index extends React.Component{
  componentWillMount() {
    console.log('index - componentWillMount')
  }

  componentDidMount() {
    console.log('index - componentWillMount')
  }
  render(){
    var component = <ComponentHeader/>
    return(
      <div>
        {component}
        <BodyIndex userid={123456} username={'Harry Potter'}/>
        <ComponentFooter/>
      </div>

    )
  }
}

  ReactDOM.render(<Index/>, document.getElementById('example'))