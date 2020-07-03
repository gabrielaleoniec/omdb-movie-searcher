import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.term, this.state.page)
    }

    render() {
        return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <div>
                    <label className="Search-label" for="search">Movie Search</label>
                    <input
                        id="search"
                        className="Search-input"
                        type="text"
                        placeholder="Search..."
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}></input>
                    </div>
                </div>
            </form>
        </div>
    );
    }
}

export default SearchBar;