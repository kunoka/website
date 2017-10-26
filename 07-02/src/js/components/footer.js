/**
 * Created by harry on 13/10/2017.
 */
import React from 'react'
// let footerCss = require ('../../css/footer.css')

import {miniFooter} from '../../css/footer.css'

export default class ComponentFooter extends React.Component {
  render(){
    var footerConvertStyle = {
      "miniFooter": {
        "backgroundColor": "#333333",
        "color": "#ffffff",
        "paddingLeft": "20px",
        "paddingTop": "3px",
        "paddingBottom": "3px"
      },
      "miniFooter_h1": {
        "BackgroundColor": "yellow",
        "fontSize": "15px",
        "color": "red"
      }
    }
    console.log(miniFooter)
    return(
      <footer style={footerConvertStyle.miniFooter}>
        <h1 style={footerConvertStyle.miniFooter_h1}>这里是页脚12345678890</h1>
      </footer>
    )
  }
}