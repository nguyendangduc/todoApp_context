import React, { useState, ChangeEvent } from "react";
export interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
}
import { useTodoContext } from "../services/TodoContext";

export const AddTodoForm: React.FC<Props> = ({ }) => {
  const {addTodo} = useTodoContext()
  const [text, setText] = useState("");

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <button
        className="btn-add"
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        +
      </button>
    </form>
  );
};
