import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {TodoList,removeItem}=this.props;
    //console.log(TodoList);
    return (
      <div className="list">
        {/* Render the todo here from the props*/
        TodoList.map((todo,index)=>(<Todo todo={todo} removeItem={removeItem} key={index}/>))
        }
        
        
      </div>
    );
  }
}
