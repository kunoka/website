import React from 'react'
import {Row, Col} from 'antd'
import {Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd'

const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const MenuItemGroup = Menu.ItemGroup
import {Router, Route, Link, browseHistory} from 'react-router'

class CommonComments extends React.Component {
  constructor(){
    super()
    this.state = {
      comments: ''
    }
  }

  componentDidMount() {
    let myFetchOptions = {
      "method": 'GET'
    }
    let uri = "http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey
    fetch(uri, myFetchOptions).then(response => response.json()).then(json => this.setState({'comments': json}))
  }
  handleSubmit (){
    e.preventDefault()
    let myFetchOptions = {
      "method": 'GET'
    }
    let uri = "http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=999&uniquekey=" + this.props.uniquekey + "&comment=content"
    fetch(uri, myFetchOptions).then(response => response.json()).then(json => {
      this.componentDidMount
    })
  }
  render(){
    let {getFieldProps} = this.props.form
    const {comments} = this.state
    const commentList = comments.length ?
      comments.map((comment, index) => {<card index={index} title ={comment.UserName} extra={<a href="#">发布于{comment.datetime}</a>}>
        <p>{comment.Comments}</p>
      </card>})
      :
      '没有加载到任何评论'
    return(
      <div className="comment">
        <Row>
          <Col span="24">
            {commentList}
            <Form onsubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="请评论" {...getFieldProps('remark',{initialValue:''})}/>
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default CommonComments = Form.create({})(CommonComments)