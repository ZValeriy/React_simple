import React, {Component} from "react"
import ToDoItem from "./ToDoItem";
import todosData from "../todosData";

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id, prevState) {
        this.setState(prevState => {
            const newTodos =  prevState.todos.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            });
            return {
                todos: newTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
        <div className="todo-list">
        {todoItems}
        </div>
    )
    }
    
}
export default MainContent;