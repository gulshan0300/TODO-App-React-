import { Component } from "react";

export class Todo extends Component {
  render() {
    const{todo,removeItem}=this.props;
    console.log(todo);
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={()=>removeItem(this.props.todo)}>x</button>
      </div>
    );
  }
}
