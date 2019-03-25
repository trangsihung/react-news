import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div className="item">
          <h2 className="item-name">
              <a target="_blank" href="#">Lightning Talk Kì 29 – Những môn học quan trọng trong ngành lập trình</a>
          </h2>

          <div className="summary">
              <p>Kì này, mình chia sẻ về những môn học quan trọng trong ngành lập trình nha. Các bạn mới vào học hoặc tự học thì tham
              khảo nhé :D. &#160; Những môn cực kì quan trọng Nhập môn lập trình Lập trình hướng đối tượng Cơ sở dữ liệu Những môn
                      dùng nhiều trong công...</p>
          </div>

          <div className="meta">
              <p className="date">Đăng ngày: <span>20/12/2018</span></p>
              <p className="soucre">tại <span>(toidicodedao.com)</span></p>
          </div>
      </div>
    )
  }
}
