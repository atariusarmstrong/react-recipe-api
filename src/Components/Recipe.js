import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        return (
            <div>
                {this.props.recipe}
            </div>
        );
    }
}

export default Recipe;