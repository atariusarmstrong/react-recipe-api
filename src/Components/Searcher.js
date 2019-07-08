import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { InputGroup } from 'react-bootstrap'

class Searcher extends Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <InputGroup className='mb-3'>
                        <input name="search" onChange={this.props.handleChange} value={this.props.search} placeholder="Search recipe..." />
                        <InputGroup.Append>
                            <Button>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>

            </div>
        );
    }
}

export default Searcher;