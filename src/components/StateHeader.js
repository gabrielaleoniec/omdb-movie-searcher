import React from 'react';
import { connect } from 'react-redux'

const StateHeader = (props) => {
    if (!props.movies.length) {
        return <h2 className="Movies-info">No movies found</h2>
    }

    return <h2 className="Movies-info">
        {props.movies.length} {props.movies.length === 1 ? ('movie') : ('movies')} listed
    </h2>
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        isLoading: state.isLoading,
        title: state.title
    }
}

export default connect(mapStateToProps)(StateHeader)