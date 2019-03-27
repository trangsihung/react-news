import React, { Component } from 'react'

export default class NewsPagination extends Component {

    prevPage = (e) => {
        e.preventDefault();
        this.props.goPage(-1)
    }

    nextPage = (e) => {
        e.preventDefault();
        this.props.goPage(1)
    }

    render() {
        return (
            <div>
                <div className="pagination">
                    <ul>
                        <li className={this.props.current === 1 ? 'hide' : 'show'}><a onClick={this.prevPage} href="/">&lt; Prev</a></li>
                        <li className={this.props.current === this.props.total ? 'hide' : 'show'}><a onClick={this.nextPage} href="/">Next &gt;</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
