export type AddTodo = (text: string) => void;
export type ToggleTodo = (todo: Todo) => void;
export type DeleteTodo = (index: number) => void;

export interface Todo {
    text: string;
    complete: boolean;
}


// import { Todo,ToggleTodo } from "../models/TodoModel"