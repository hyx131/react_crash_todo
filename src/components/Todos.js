import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
// proptypes = validates properties a components should have --> can set the types, required, etc

const Todos = props => {
  console.log(props.todos);
  //have access to todos state passed down from app.js as props

  const todoTitle = props.todos.map(todo => {
    // pass every todo (as maping through the todos array) as props down to the TodoItem file
    // map return an array from an array
    // need key attr with iteration --> unique

    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={() => props.markComplete(todo.id)}
        delTodo={() => props.delTodo(todo.id)}
      />
    );
  });

  return <div>{todoTitle}</div>;
};

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
// todos prop passed in has to be an array and is required

export default Todos;
