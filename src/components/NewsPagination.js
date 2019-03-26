import React, { Component } from 'react'

export default class NewsPagination extends Component {
  render() {

    return (
      <div>
            <div className="pagination">
                <ul>
                    <li className="first"><a href="/">&lt;&lt;</a></li>
                    <li className="prev"><a href="/">&lt;</a></li>
                    <li><a href="/">3</a></li>
                    <li><a href="/">4</a></li>
                    <li className="active"><a href="/">5</a></li>
                    <li><a href="/">6</a></li>
                    <li><a href="/">7</a></li>
                    <li className="next"><a href="/">&gt;</a></li>
                    <li className="last"><a href="/">&gt;&gt;</a></li>
                </ul>
            </div>
      </div>
    )
  }
}
