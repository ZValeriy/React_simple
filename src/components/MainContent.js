import React, {Component} from "react"
import ToDoItem from "./ToDoItem";
import todosData from "../todosData";

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    return (
        <div className="todo-list">
        {todoItems}
        </div>
    )
    }
    
}
export default MainContent;