import React from 'react'

const Movie = (props) => {
    const {key, image} = props

    return <div key={key}>
        <img src={image.Poster}/>
        <h3>{image.Title}</h3>
        <div>{image.Type}</div>
        <div>{image.Year}</div>

        {image.Year}
    </div>
}

export default Movie;