import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <h1 className="site-title">{ this.props.title }</h1>
        </div>
      </div>
    )
  }
}
