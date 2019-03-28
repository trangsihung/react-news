import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Loading from './Loading';
import NewsList from './NewsList';
import NewsPagination from './NewsPagination';

class App extends Component {
    api = {
        key: '87b27a3e27ce44d3852e3878f1da28ae'
    }

    state = {
        isLoading: true,
        news: [],
        error: null,
        page: 1,
        totalPages: null,
        totalResults: null
    }

    fetchNews(page) {
        // Where we're fetching data from
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=5&apiKey=${this.api.key}`)
            .then(data =>
                this.setState({
                    isLoading: false,
                    news: data.data.articles,
                    totalPages: Math.ceil( data.data.totalResults / 5 ),
                    totalResults: data.data.totalResults
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error }));
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.fetchNews(1);
    }

    componentWillUpdate() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    goPage = (dir) => {
        let _page = this.state.page + dir;
        if ( _page < 1 ) _page = 1;
        if ( _page >= this.state.totalPages ) _page = this.state.totalPages;
        this.setState({ page: _page, isLoading: true });
        this.fetchNews(_page);
    }

    render() {
        console.log('render');
        return (
            <div className="App">
                <Header title="News API: Top Headlines"/>
                <div className="wrapper">
                    <Loading isLoading={this.state.isLoading}/>
                    <div className={this.state.isLoading ? 'hide' : 'show'}>
                        <NewsList items={this.state.news} />
                        <div className="cb"></div>
                        <NewsPagination current={this.state.page} total={this.state.totalPages} goPage={this.goPage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;