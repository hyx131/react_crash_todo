import React, { useState } from "react";
import "./AddTodo.scss";

const initialAddTodo = {
  title: ""
};

const AddTodo = props => {
  const [AddTodoItem, setAddTodoItem] = useState(initialAddTodo);

  const Submit = e => {
    e.preventDefault();
    props.addTodo(AddTodoItem.title);
    setAddTodoItem({ title: "" });
  };

  return (
    <form onSubmit={Submit} className="add-todo">
      <input
        type="text"
        name="title"
        placeholder="Add Todo ..."
        className="add-todo__input"
        value={AddTodoItem.title}
        onChange={e => setAddTodoItem({ title: e.target.value })}
      />
      <button type="submit" className="add-todo__btn">
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
