import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {}
import { useTodoContext } from "../services/TodoContext";

export const TodoList: React.FC<Props> = (props) => {
  const { todos, filterTodo } = useTodoContext();
  return (
    <div className="list">
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem key={index} index={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
