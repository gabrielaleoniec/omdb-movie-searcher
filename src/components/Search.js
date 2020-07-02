import React from 'react'

class Search extends React.Component {
    onInputChange(e) {
        console.log(e.target.value)
    }

    onFormSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <label>Movie Search</label>
                <input type="text" placeholder="Search..." onChange={this.onInputChange}></input>
            </form>
        </div>
    );
    }
}

export default Search;