import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {}
import { useGlobalContext } from "../services/AppContext";

export const TodoList: React.FC<Props> = (props) => {
  const { todos, filterTodo } = useGlobalContext();
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
