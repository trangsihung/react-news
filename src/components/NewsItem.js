import React, { Component } from 'react'

export default class NewsItem extends Component {

    backgroundImage(img) {
        return {
            backgroundImage: `url(${img})`
        }
    }

    render() {
        const item = this.props.article;
        return (
            <div className="item">
                <div className="image" style={this.backgroundImage(item.urlToImage)}>
                    <a rel="noopener noreferrer" target="_blank" href={item.url}>
                        <span className="sr-only">{item.title}</span>
                    </a>
                </div>
                <div className="info">
                    <h2 className="item-name">
                        <a rel="noopener noreferrer" target="_blank" href={item.url}>{item.title}</a>
                    </h2>

                    <div className="summary">
                        <p>{item.description}</p>
                    </div>

                    <div className="meta">
                        <p className="date">At: <span>{item.publishedAt}</span></p>
                        <p className="soucre"> on <span>({item.source.name})</span></p>
                    </div>
                </div>
                <div className="cb"></div>
            </div>
        )
    }
}
