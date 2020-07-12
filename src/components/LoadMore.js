import React from 'react';
import { connect } from 'react-redux'
import {pageInput} from '../actions'

class LoadMore extends React.Component {
    pageNrIncrease = (e) => {
        e.preventDefault()

        console.log('Props page inside LoadMore', this.props.page)

        const newPage = this.props.page + 1

        this.setState({page: newPage})

        this.props.dispatch(pageInput(newPage))

        this.props.onClick()
    }

    render () {
        console.log('Render:', this.props)
        if(!this.props.showMore){
            return null
        }
        return <button onClick={this.pageNrIncrease}>Load more</button>
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps in the Load More:', state)
    return {
        page: state.page,
        showMore: state.showMore
    }
  }

export default connect(mapStateToProps)(LoadMore);