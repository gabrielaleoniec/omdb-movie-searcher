import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import './MovieList.css'
import StateHeader from './StateHeader'

const MovieList = (props) => {
    if (props.movies === null) {
        return null
    }

    const movies = props.movies.map((movie) => <Movie key={movie.imdbID.toString()} movie={movie} />)

    if (!props.title) {
        return null
    }

    if(!props.movies.length) {
        return <section><StateHeader /></section>
    }

    return <section>
        <div>
            <StateHeader />
            <ul className="Movies">
                {movies}
            </ul>
        </div>
    </section>
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        isLoading: state.isLoading,
        title: state.title
    }
}

export default connect(mapStateToProps)(MovieList)