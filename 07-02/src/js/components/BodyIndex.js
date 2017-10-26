/**
 * Created by harry on 13/10/2017.
 */
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom'
import BodyChild from './bodychild'
import MixinLog from './mixins'
import ReactMixin from 'react-mixin'

import { Input } from 'antd'
const defaultProps = {
  username: '这是一个默认的用户名'
}
export default class BodyIndex extends React.Component{
  // 构造器
  constructor() {
    super(); //调用基类的所有的初始化方法
    this.state = {
      userName: 'Parry',
      age: 20
    }
  }

  componentDidMount() {
    // 第一种方式
    // var mySubmitButton = document.getElementById('submitButton')
    // console.log(mySubmitButton)
    // ReactDOM.findDOMNode(mySubmitButton).click()
    // 第二种方式
    // console.log(this.refs.submitButton)
    // this.refs.submitButton.click()
  }
  changeUserInfo(age) {
    console.log('I am clicked')
    this.setState({age: age});
    // 第一种方式
    // var mySubmitButton = document.getElementById('submitButton')
    // console.log(mySubmitButton)
    // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red'
    // 第二种方式
    // this.refs.submitButton.style.color = 'yellow'
    MixinLog.log()
  }

  handleChildEventValue (event) {
    this.setState({
      age: event.target.value
    })
  }
  render(){
    // setTimeout(() => {
    //   this.setState({
    //     userName: Date.now()
    //   })
    // }, 100)
    return (
      <div>
        <h2>页面的主体内容 ffff</h2>
        <p>接收到的父页面的属性 userid: {this.props.userid} userName: {this.props.username}</p>
        <p>age: {this.state.age}</p>
        <Input placeholder="default size" />
        {/*<input type="button" value="提交" onClick= {this.changeUserInfo.bind(this, 99)} />*/}
        <Input ref="submitButton" type="button" value="提交" onClick= {this.changeUserInfo.bind(this, 99)} />
        <BodyChild {...this.props} id={4} handleChildEventValue={this.handleChildEventValue.bind(this)}/>
      </div>
    )
  }
}

BodyIndex.PropTypes = {
  // userid: React.PropTypes.number.isRequired,
}

BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.prototype, MixinLog)