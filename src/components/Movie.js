import React from 'react'
import './Movie.css'

const Poster = (poster, title) => {
    if(poster === "N/A") {
        return <div className="Movie-image"><i className="fa fa-image fa-3x Movie-icon"></i></div>
    }
    return <img src={poster} alt={title} className="Movie-image"/>
}

const Movie = (props) => {
    const {movie} = props

    return <li className="Movie">
        {Poster(movie.Poster, movie.Title)}
        <div className="Movie-cover"></div>
        <div className="Movie-data">
            <h3 className="Movie-title">{movie.Title}</h3>
            <div>{movie.Type}</div>
            <div>{movie.Year}</div>
        </div>
    </li>
}

export default Movie;