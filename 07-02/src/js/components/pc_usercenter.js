import React from 'react'
import {Row, Col} from 'antd'
import {Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal, Card, notification, Upload} from 'antd'

const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const MenuItemGroup = Menu.ItemGroup
import {Router, Route, Link, browseHistory} from 'react-router'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

export default class PCUserCenter extends React.Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      usercollection: '',
      usercomments: '',
      previewImage: '',
      previewVisible: false
    }
  }

  componentDidMount() {
    let myFetchOption = {
      method: 'GET'
    };

    // 获取收藏列表
    let uri = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid
    console.log('uri', uri)
    fetch(uri, myFetchOption)
      .then(response => response.json())
      .then(json => {
        console.log('json', json)
        this.setState({
          usercollection: json
        })
        console.log('usercollection', this.state.usercollection)
      })

    // 获取评论列表
    let uri_comment = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userid
    console.log('uri', uri_comment)
    fetch(uri_comment, myFetchOption)
      .then(response => response.json())
      .then(json => {
        console.log('json-comment', json)
        this.setState({
          usercomments: json
        })
      })
  }

  render() {
    const props = {
      name: '',
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      listType: 'picture-card',
      defaultFileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ],
      onPreview: (file) => {
        this.setState({
          previewImage: file.url,
          previewVisible: true
        })
      }
    }
    const {usercollection} = this.state;
    console.log('usercomments', this.state.usercomments)

    const usercollectionList = usercollection.length ?
      usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{uc.Title}</p>
        </Card>
      ))
      :
      '您还没有收藏文章，请去收藏吧。';

    const {usercomments} = this.state;
    const usercommentsList = usercomments.length ?
      usercomments.map((comment, index) => (
        <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      :
      '您还没有评论文章，请去评论吧。';
    console.log('usercommentsList',usercommentsList)
    return (
      <div>
        <PCHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <div className="comment">
                  <Row>
                    <Col span={24}>
                      {usercollectionList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                <div className="comment">
                  <Row>
                    <Col span={24}>
                      {usercommentsList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus"/>
                    <div className="ant-upload-text">上传照片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null}
                         onCancel={this.handleCancel}>
                    <img src={this.state.previewImage} alt="预览"/>
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>

        <PCFooter/>
      </div>
    )
  }
}