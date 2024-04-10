import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
      this.state.todos.unshift({text:text});
      this.setState({todos:this.state.todos})
  };

  handleRemove = (todo) => {
    // complete the function to remove the Todo from the list
    console.log(todo);
      const index=this.state.todos.indexOf(todo);
      console.log("index ", index);

        this.state.todos.splice(index,1);
        this.setState({todos:this.state.todos})
        console.log("Todos ",this.state.todos);
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */
        
        }
        <Form addFun={this.handleAdd}/>
        <List TodoList={this.state.todos} removeItem={this.handleRemove}/>
      </div>
    );
  }
}
