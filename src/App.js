import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import {listMovies, toggleMore} from './actions'
import store from './store/store'
import './App.css';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'

/**
 * TODO: One more input: year
 * TODO: Comments
 * TODO: Readme correct
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      page: 1
    }
  }


  onSearchSubmit = async () => {
    console.log('>>App', this.props)
    // Props were not updated by mapStateToProps
    const {title, page, movies, showMore} = store.getState()
    const url = 'http://www.omdbapi.com/'
    const apikey = '157f34ed'
    const response = await axios.get(url, {
      params: {
        apikey,
        s: title,
        page: page || 1
      }
    })

    if(!response.data) {
      console.log('No response data returned from server')
    }

    console.log('Response data', response.data.Search)
    const newMovies = response.data.Search || []

    if(movies.length && newMovies.length < 10){
      this.props.dispatch(toggleMore(false))
    }
    if(newMovies.length === 10 && !showMore) {
      this.props.dispatch(toggleMore(true))
    }

    this.props.dispatch(listMovies([...movies, ...newMovies]))
    this.setState({ movies: [...movies, ...newMovies] })
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
            <LoadMore onClick={this.onSearchSubmit} />
          </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps in the App: state:', state)
  return {
      title: state.title,
      page: state.page,
      movies: state.movies,
      showMore: state.showMore
  }
}

export default connect(mapStateToProps, null)(App);
