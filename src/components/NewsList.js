import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class NewsList extends Component {
  render() {
    return (
      <div>
            <div className="news-list">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
      </div>
    )
  }
}
