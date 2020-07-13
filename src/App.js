import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { listMovies, toggleMore, toggleLoading } from './actions'
import store from './store/store'
import './App.css';
import SearchBar from './components/SearchBar'
import MovieListWrapper from './components/MovieListWrapper'
import LoadMore from './components/LoadMore'
import WithLoading from './components/WithLoading'

const LoadMoreWithLoading = WithLoading(LoadMore)

const url = 'http://www.omdbapi.com/'
const apikey = '157f34ed'
/**
 * TODO: One more input: year
 * TODO: Readme correct
 * TODO: Add sorting
 */
const App = (props) => {
    const onSearchSubmit = async () => {
        // Props were not updated by mapStateToProps
        const { title, year, page, movies, showMore } = store.getState()

        props.dispatch(toggleLoading(true))

        try {
            const response = await axios.get(url, {
                params: {
                    apikey,
                    s: title,
                    y: year,
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

            const mergedMovies = [...movies, ...newMovies]

            props.dispatch(listMovies(mergedMovies))
        } catch(e) {
            console.error(e.response)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Open Movie Database Search</h1>
            </header>
            <main>
                <SearchBar onSubmit={onSearchSubmit} />
                <MovieListWrapper />
                <LoadMoreWithLoading onClick={onSearchSubmit} isLoading = {props.isLoading}/>
            </main>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        year: state.year,
        page: state.page,
        movies: state.movies,
        showMore: state.showMore,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(App);
