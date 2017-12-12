import React from 'react'
import {Row, Col} from 'antd'
import {Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal, Card, notification} from 'antd'

const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const MenuItemGroup = Menu.ItemGroup
import {Router, Route, Link, browseHistory} from 'react-router'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

export default class MobileUserCenter extends React.Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      usercollection: '',
      previewImage: '',
      previewVisible: false
    }
  }
  componentDidMount() {
    let myFetchOption = {
      method: 'GET'
    };
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
    const usercollectionList = usercollection.length ?
      usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{uc.Title}</p>
        </Card>
      ))
      :
      '您还没有收藏文章，请去收藏吧。';
    return (
      <div>
        <MobileHeader/>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
              </TabPane>
              <TabPane tab="头像设置" key="3">
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <MobileFooter/>
      </div>
    )
  }
}