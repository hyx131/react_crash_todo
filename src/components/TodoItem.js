import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.scss";
import classnames from "classnames";

// props - each todo passed down from maping in Todos.js
const TodoItem = props => {
  // console.log(props);

  const todoItemStyle = classnames("todo-item", {
    "todo-item--completed": props.todo.completed
  });

  return (
    <div className={todoItemStyle}>
      <p>
        <input type="checkbox" onChange={props.markComplete} />{" "}
        {props.todo.title}
        <button onClick={props.delTodo} className="todo-item__delete-button">
          x
        </button>
      </p>
    </div>
  );
};

// PropTypes
TodoItem.propTyps = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
