import React from 'react'
import { connect } from 'react-redux'
import arraySort from 'array-sort'
import { listMovies } from '../actions'
import './MovieListWrapper.css'
import StateHeader from './StateHeader'
import MovieList from './MovieList'

class MovieListWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timestamp: Date.now()
        }
    }

    handleClick = (sortBy, isDesc, e) => {
        e.preventDefault()

        const reverse = { reverse: isDesc }

        const sortedMovies = arraySort(this.props.movies, sortBy, reverse)

        this.props.dispatch(listMovies(sortedMovies))

        // When there is no change in the props of the child component,
        // the change in the store gets unnoticed
        this.setState({ timestamp: Date.now() })
    }

    render() {
        if (this.props.movies === null) {
            return null
        }

        if (!this.props.title) {
            return null
        }

        if (!this.props.movies.length) {
            return <section><StateHeader /></section>
        }

        return <section>
            <div>
                <StateHeader />
                <label className="Select-label" htmlFor="movie-sort">Sort by... </label>
                <select className="Select" id="movie-sort">
                    <option onClick={(e) => this.handleClick('Title', false, e)}>
                        name ascending
                    </option>
                    <option onClick={(e) => this.handleClick('Title', true, e)}>
                        name descending
                    </option>
                    <option onClick={(e) => this.handleClick('Year', false, e)}>
                        year ascending
                    </option>
                    <option onClick={(e) => this.handleClick('Year', true, e)}>
                        year descending
                    </option>
                </select>
                <MovieList timestamp={this.state.timestamp} />
            </div>
        </section>
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        isLoading: state.isLoading,
        title: state.title
    }
}

export default connect(mapStateToProps)(MovieListWrapper)