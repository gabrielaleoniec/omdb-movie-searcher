import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { listMovies, toggleMore, toggleLoading } from './actions'
import store from './store/store'
import './App.css';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'
import WithLoading from './components/WithLoading'

const LoadMoreWithLoading = WithLoading(LoadMore)

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
        // Props were not updated by mapStateToProps
        const { title, page, movies, showMore } = store.getState()

        props.dispatch(toggleLoading(true))

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

        props.dispatch(toggleLoading(false))

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
                <LoadMoreWithLoading onClick={onSearchSubmit} isLoading = {props.isLoading}/>
            </main>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        page: state.page,
        movies: state.movies,
        showMore: state.showMore,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(App);
