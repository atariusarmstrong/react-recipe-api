import React, { Component } from 'react';

class Searcher extends Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input name="search" onChange={this.props.handleChange} value={this.props.search} placeholder="Search recipe..." />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default Searcher;