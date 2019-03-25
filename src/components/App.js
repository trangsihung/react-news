import React, { Component } from 'react';
import Header from './Header';
import NewsList from './NewsList';
import NewsPagination from './NewsPagination';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header title="Kipalog News"/>
            <div className="wrapper">
                <NewsList />
                <NewsPagination />
            </div>
        </div>
    );
  }
}

export default App;
