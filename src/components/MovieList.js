import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import './MovieList.css'

const MovieList = (props) => {
    if(props.movies === null) {
        return null
    }

    const movies = props.movies.map((movie) =>  <Movie key={movie.imdbID.toString()} movie={movie} />)

    if(!props.movies.length) {
        return <h2 className="Movies-info">No movies found</h2>
    }

    return <section>
        <div>
        <h2 className="Movies-info">{props.movies.length} {props.movies.length === 1? ('movie'): ('movies')} listed</h2>
        <ul className="Movies">
            {movies}
        </ul>
        </div>
        </section>
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
  }

export default connect(mapStateToProps)(MovieList)