import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import './MovieList.css'

const MovieList = (props) => {
    return <ul className="Movies">
        {props.movies.map((movie) => <Movie key={movie.imdbID.toString()} movie={movie} />)}
    </ul>
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList)