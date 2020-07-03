import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'


/**
 * TODO: Redux
 * TODO: Pagination
 * TODO: One more input
 * TODO: Comments
 * TODO: Readme
 */
class App extends React.Component {
  state = {
    movies: null,
    page: 1
  }

  onSearchSubmit = async (term, page) => {
    const url = 'http://www.omdbapi.com/'
    const apikey = '157f34ed'
    const response = await axios.get(url, {
      params: {
        apikey,
        s: term,
        page
      }
    })

    if(response.data && response.data.Search) {
      return this.setState({ movies: response.data.Search })
    }

    this.setState({ movies: [] })
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1>Open Movie Database Search</h1>
          </header>
          <main>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <MovieList movies={this.state.movies} />
          </main>
      </div>
    );
  }
}

export default App;
