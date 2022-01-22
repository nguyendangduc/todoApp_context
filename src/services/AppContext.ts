import { createContext, useContext } from "react";
import { Todo, AddTodo, ToggleTodo, DeleteTodo } from "../models/TodoModel";

type GlobalContext = {
  todos: Todo[];
  setTodos: (totos: Todo[]) => void;
  toggleTodo: ToggleTodo;
  addTodo: AddTodo;
  deleteTodo: DeleteTodo;
  filterTodo: (status: boolean|null) => void
};

export const CreateGlobalContext = createContext<GlobalContext>({
  todos: [],
  setTodos: () => {},
  toggleTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  filterTodo: () => {},
});

export const useGlobalContext = () => useContext(CreateGlobalContext);
