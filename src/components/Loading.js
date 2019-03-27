import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div className={this.props.isLoading ? 'loading active' : 'loading'}><i className="fa fa-refresh fa-spin fa-2x"></i></div>
    )
  }
}
