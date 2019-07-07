import React, { Component } from 'react';

class Searcher extends Component {
    state ={
        search: null
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    render() {
        return (
            <div>
                <form>
                    <input name="search" onChange={this.handleChange} value={this.state.search} placeholder="Search recipe..." />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default Searcher;