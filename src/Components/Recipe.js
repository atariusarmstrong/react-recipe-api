import React, { Component } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'


class Recipe extends Component {
    render() {
        return (
            <div>
                {this.props.recipe &&
                    <div>
                        <Container>
                            <Row>

                                {this.props.recipe.recipes.map((recipe, i) => (
                                    <Col md={4}>
                                        <Card key={i}>
                                            <Card.Img src={recipe.image_url} alt={recipe.title}/>
                                            <Card.ImgOverlay>
                                                <Card.Title>{recipe.title}</Card.Title>
                                            </Card.ImgOverlay>
                                        </Card>

                                    </Col>
                                ))}

                            </Row>
                        </Container>
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;