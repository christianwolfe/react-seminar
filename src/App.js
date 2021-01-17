import "./App.css";
import React, { Component } from 'react';
import SingleTodo from './SingleTodo'

class App extends Component {
  constructor() {
    //allows keyword 'this'
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  }

  onClick = () => {
    //creates copy of original todos list
    let todosCopy = this.state.todos.slice();
    //adds new todo to end of todo list
    todosCopy.push(this.state.currentTodo);

    this.setState({todos: todosCopy, currentTodo: "" });
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  }
 render() {
   //we want a list of all todos
   let bulletedTodos = this.state.todos.map((e, i) => {
     return(
      <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
     );
   });

   return (
     <div>
       <input placeholder="Enter Todo" value={this.state.currentTodo} onChange={this.onInputChange} />
       <button onClick={this.onClick}>Add!</button>
       <br/>
       { this.state.todos.length === 0 ? "No todos yet" : <ul>{bulletedTodos}</ul>}
     </div>
   )
 }
}

export default App;
