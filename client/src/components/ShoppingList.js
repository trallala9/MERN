import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import uuid from 'uuid';
class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Ketchup' },
            { id: uuid(), name: 'Flour' },
            { id: uuid(), name: 'Joghurt' },
            { id: uuid(), name: 'Ananas' }
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add Item</Button>
                //we want to display these items
                <ListGroup>

                </ListGroup>
            </Container >

        );
    }

}
export default ShoppingList;