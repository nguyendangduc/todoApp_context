import { createContext, useContext, useState } from "react";
import { Todo, AddTodo, ToggleTodo, DeleteTodo } from "../models/TodoModel";

type TodoContext = {
  todos: Todo[];
  setTodos: (totos: Todo[]) => void;
  toggleTodo: ToggleTodo;
  addTodo: AddTodo;
  deleteTodo: DeleteTodo;
  filterTodo: (status: boolean | null) => void;
};

export const CreateTodoContext = createContext<TodoContext>({
  todos: [],
  setTodos: () => {},
  toggleTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  filterTodo: () => {},
});

export const useTodoContext = () => useContext(CreateTodoContext);

interface Props {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState([
    {
      text: "Hoc Java",
      complete: false,
    },
    {
      text: "Hoc Reactjs",
      complete: true,
    },
  ]);

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

  const filterTodo = (status: boolean | null) => {
    if (status === null) {
    }
    setTodos(todos.filter((todo) => todo.complete === status));
  };

  return (
    <CreateTodoContext.Provider
      value={{
        todos,
        setTodos,
        toggleTodo,
        addTodo,
        deleteTodo,
        filterTodo,
      }}
    >
      {props.children}
    </CreateTodoContext.Provider>
  );
};
