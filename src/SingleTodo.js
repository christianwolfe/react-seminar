import React, { Component } from 'react';

class SingleTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
        )
    }
}

export default SingleTodo;