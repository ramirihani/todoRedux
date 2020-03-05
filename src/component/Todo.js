import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo, deleteTodo, completetodo } from "../store/actions/action";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ""
    };
  }

  updateInput = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addTodo({
      title: this.state.newItem,
      id: Date.now(),
      isComplete: false
    });
  };

  render() {
    return (
      <div className="bigbloc">
        <h1 className="app-title">To-Do APP !</h1>
        <p className="app-title1">Add new To-Do</p>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.updateInput}
            className="input"
            placeholder="Enter a task here"
          />
          <button className="add-btn"> Add</button>
        </form>
        <div className="center">
          {this.props.todos.map(todo => (
            <div key={todo.id}>
              <li className={todo.isComplete ? "complete" : ""}>
                {todo.title}

                <button
                  className="btncomplete"
                  onClick={() => this.props.completetodo(todo.id)}
                >
                  {!todo.isComplete ? "complete" : "undo"}
                </button>
                <button
                  className="btndelete"
                  onClick={() => this.props.deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addtodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    completetodo: id => dispatch(completetodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
