import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.scss";
import uuidV4 from "uuid/v4";
import axios from "axios";

// states of Todo:
const initialTodos = []; // each component has their own state
// todo state = state that needs to be accessible to multiple components ( so is in app.js )

// taking "todos" in state and pass it down to "todos component" as props
const App = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  // console.log(todoState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        setTodoState(res.data);
      });
  }, []);

  // Toggle Complete
  const updateCompleted = id => {
    return todoState.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };

  // delete todo
  const deleteTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        let newArr = todoState.filter(todo => todo.id !== id);
        setTodoState(newArr);
      });
    // return todoState.filter(todo => todo.id !== id);
  };

  // add todo --> gets passed in the title
  const addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        title,
        completed: false
      })
      .then(res => {
        let newData = { ...res.data, id: uuidV4() };
        setTodoState(prev => [...prev, newData]);
      });
  };

  const Index = () => {
    return (
      <>
        <AddTodo addTodo={title => addTodo(title)} />
        <Todo
          todos={todoState}
          markComplete={id => setTodoState(updateCompleted(id))}
          delTodo={id => deleteTodo(id) /*setTodoState(deleteTodo(id))*/}
        />
      </>
    );
  };

  return (
    <Router>
      <div>
        <div className="container">
          <Header />
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;

// this is the main app component
// create other components in the src/components folder
