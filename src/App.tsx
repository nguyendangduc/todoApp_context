import React, { useState } from "react";
import './App.css'
import { TodoList } from "./Component/TodoList";
import { AddTodoForm } from "./Component/AddTodoForm";
import {TodoProvider } from "./services/TodoContext";

function App() {
  return (
    <TodoProvider >
      <div className="app">
      <div className="wrap">
      <AddTodoForm />
      <TodoList />
      </div>
      </div>
    </TodoProvider>
  );
}

export default App;
