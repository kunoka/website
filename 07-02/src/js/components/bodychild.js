/**
 * Created by harry on 13/10/2017.
 */
import React from 'react'

export default class BodyChild extends React.Component {
  render(){
    return (
      <div>
        <p>孙子页面输入: <input type="text" onBlur={this.props.handleChildEventValue} /></p>
        <p>{this.props.userid} {this.props.username} {this.props.id}</p>
      </div>
    )
  }
}