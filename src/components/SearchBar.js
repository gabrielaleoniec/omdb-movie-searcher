import React from 'react'
import { connect } from 'react-redux'
import {titleInput, pageInput, listMovies, toggleMore} from '../actions'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    onFormSubmit = (e) => {
        console.log('onFormSubmit', this.props)
        e.preventDefault()

        this.props.dispatch(titleInput(this.state.query))
        this.props.dispatch(pageInput(1))
        this.props.dispatch(listMovies([]))
        this.props.dispatch(toggleMore(false))

        this.props.onSubmit()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <div>
                        <label className="Search-label" htmlFor="search">Movie title</label>
                        <input
                            id="search"
                            className="Search-input"
                            type="text"
                            placeholder="Movie title..."
                            value={this.state.query}
                            onChange={e => this.setState({query: e.target.value})}></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(SearchBar);