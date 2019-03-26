import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class NewsList extends Component {
  render() {
    return (
      <div>
            <div className="news-list">
                {this.props.items.map(item => <NewsItem key={'_' + Math.random().toString(36).substr(2, 9)} article={item} />)}
            </div>
      </div>
    )
  }
}
