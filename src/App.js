import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { listMovies, toggleMore } from './actions'
import store from './store/store'
import './App.css';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'

const url = 'http://www.omdbapi.com/'
const apikey = '157f34ed'
/**
 * TODO: One more input: year
 * TODO: Comments
 * TODO: Readme correct
 * TODO: Add sorting
 * TODO: Add loading
 */
const App = (props) => {
    const onSearchSubmit = async () => {
        console.log('>>App', props)
        // Props were not updated by mapStateToProps
        const { title, page, movies, showMore } = store.getState()

        const response = await axios.get(url, {
            params: {
                apikey,
                s: title,
                page: page || 1
            }
        })

        if (!response.data) {
            console.log('No response data returned from server')
        }

        const newMovies = response.data.Search || []

        if (movies.length && newMovies.length < 10) {
            props.dispatch(toggleMore(false))
        }
        if (newMovies.length === 10 && !showMore) {
            props.dispatch(toggleMore(true))
        }

        props.dispatch(listMovies([...movies, ...newMovies]))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Open Movie Database Search</h1>
            </header>
            <main>
                <SearchBar onSubmit={onSearchSubmit} />
                <MovieList />
                <LoadMore onClick={onSearchSubmit} />
            </main>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps in the App:', state)
    return {
        title: state.title,
        page: state.page,
        movies: state.movies,
        showMore: state.showMore
    }
}

export default connect(mapStateToProps)(App);
