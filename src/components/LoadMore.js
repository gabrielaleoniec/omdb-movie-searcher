import React from 'react';
import { connect } from 'react-redux'
import { pageInput } from '../actions'
import './LoadMore.css'

const LoadMore = (props) => {
    const pageNrIncrease = (e) => {
        e.preventDefault()

        const newPage = props.page + 1
        props.dispatch(pageInput(newPage))

        props.onClick()
    }


    if (!props.showMore) {
        return null
    }

    return <button className="Load-more" onClick={pageNrIncrease}>Load more</button>
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        showMore: state.showMore
    }
}

export default connect(mapStateToProps)(LoadMore);