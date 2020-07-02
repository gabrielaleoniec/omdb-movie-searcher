import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import SearchBar from './components/Search'
import MovieList from './components/MovieList'

class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const url = 'http://www.omdbapi.com/'
    const apikey = '157f34ed'
    const response = await axios.get(url, {
      params: {
        apikey,
        s: term
      }
    })

    this.setState({images: response.data.Search})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Open Movie Database Searcher</h1>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <MovieList images={this.state.images} />
        </header>
      </div>
    );
  }
}

export default App;
