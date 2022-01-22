import React, { useState } from "react";
import './App.css'
import { TodoList } from "./Component/TodoList";
import { AddTodoForm } from "./Component/AddTodoForm";
import { Todo, AddTodo } from "./models/TodoModel";
import { CreateGlobalContext } from "./services/AppContext";
const initialTodos: Todo[] = [
  {
    text: "Hoc Java",
    complete: false,
  },
  {
    text: "Hoc Reactjs",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, i) => {
      if (index !== i) {
        return todo;
      }
    });
    setTodos(newTodos);
  };
  const filterTodo = (status: boolean|null) => {
    if(status === null) {}
    setTodos (todos.filter((todo) => todo.complete === status))

  }

  return (
    <CreateGlobalContext.Provider
      value={{
        todos,
        setTodos,
        toggleTodo,
        addTodo,
        deleteTodo,
        filterTodo
      }}
    >
      <div className="app">
      <div className="wrap">
      <AddTodoForm />
      <TodoList />
      </div>
      </div>
    </CreateGlobalContext.Provider>
  );
}

export default App;
