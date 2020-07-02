import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <label>Movie Search</label>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})}></input>
            </form>
        </div>
    );
    }
}

export default SearchBar;