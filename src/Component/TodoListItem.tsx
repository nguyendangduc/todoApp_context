import React from 'react';

interface Todo {
  text: string;
  complete: boolean;
}
interface Props {
  todo: Todo;
  index: number;
}
import { useTodoContext } from "../services/TodoContext";

export const TodoListItem: React.FC<Props> = (props) => {
  const{ toggleTodo , deleteTodo} = useTodoContext()
  const { todo, index } = props
  function handleDelete(): void {
    if(todo.complete) {
      deleteTodo(index)
    }
  }
    return (
      <li className="item">
        <label 
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
          <input
            style={{ display:'none'}}
            type="checkbox"
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo);
            }}
          />{' '}
         <span> {todo.text}</span>
        </label>
        <button onClick={handleDelete}>X</button>

      </li>
    );
  };