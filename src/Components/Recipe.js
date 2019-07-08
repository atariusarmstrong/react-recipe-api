import React, { Component } from 'react';


class Recipe extends Component {
    render() {
        return (
            <div>
                {this.props.recipe &&
                    <div>
                        {this.props.recipe.recipes.map((recipe, i) => (
                            <div key={i}>{recipe.title}</div>
                        ))}
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;