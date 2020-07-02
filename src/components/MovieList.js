import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    const images = props.images.map((image) =>  <Movie key={image.id} image={image} />)

    return <section>
        {props.images.length} images found
        <ul>
            {images}
        </ul>
        </section>
}

export default MovieList