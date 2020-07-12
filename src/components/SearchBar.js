import React from 'react'
import { connect } from 'react-redux'
import {titleInput, yearInput, pageInput, listMovies, toggleMore} from '../actions'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        const d = new Date();

        this.state = {
            query: '',
            year: '',
            currentYear: d.getFullYear()
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(titleInput(this.state.query))
        this.props.dispatch(yearInput(this.state.year))
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
                        <label className="Search-label" htmlFor="title">Movie title</label>
                        <input
                            id="title"
                            className="Search-input"
                            type="text"
                            placeholder="Movie title..."
                            value={this.state.query}
                            onChange={e => this.setState({query: e.target.value})}></input>
                        <label className="Search-label" htmlFor="year">Year of release</label>
                        <input
                            id="year"
                            className="Search-input"
                            type="number"
                            placeholder="Year of release"
                            min="1878"
                            max={this.state.currentYear}
                            value={this.state.year}
                            onChange={e => this.setState({year: e.target.value})}></input>
                        </div>
                        <button className="Search-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(SearchBar);