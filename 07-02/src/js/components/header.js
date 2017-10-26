/**
 * Created by harry on 13/10/2017.
 */
import React from 'react'

export default class ComponentHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      miniHeader: false
    }
  }

  switchHeader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  }

  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        paddingTop: (this.state.miniHeader) ? "3px": "15px",
        paddingBottom: (this.state.miniHeader) ? "3px": "15px"
      }
    }

    return (
      <header style={styleComponentHeader.header} className="smallFontSize" >
        <h1>这里是头部1234</h1>
      </header>
    )
  }
}