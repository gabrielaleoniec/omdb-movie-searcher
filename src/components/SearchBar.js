import React from 'react'
import { connect } from 'react-redux'
import {titleInput} from '../actions'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(titleInput(this.state.query))

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

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps)(SearchBar);