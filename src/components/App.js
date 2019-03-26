import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import NewsList from './NewsList';
import NewsPagination from './NewsPagination';

class App extends Component {
    state = {
        isLoading: true,
        news: [],
        error: null,
        pagination: {
            current: 1,
            size: 5,
            totalPages: null,
            totalResults: null,
        }
    }

    fetchNews(page) {
        // Where we're fetching data from
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${this.state.pagination.size}&apiKey=87b27a3e27ce44d3852e3878f1da28ae`)
            .then(data =>
                this.setState({
                    news: data.data.articles,
                    isLoading: false,
                    pagination: {
                        totalPages: Math.ceil( data.data.totalResults / this.state.pagination.size ),
                        totalResults: data.data.totalResults
                    }
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchNews(1);
    }

    render() {
        return (
            <div className="App">
                <Header title="News API: Top Headlines"/>
                <div className="wrapper">
                    <NewsList items={this.state.news}/>
                    <div className="cb"></div>
                    <NewsPagination pagination={this.pagination}/>
                </div>
            </div>
        );
    }
}

export default App;
