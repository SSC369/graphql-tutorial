import { makeAutoObservable } from "mobx";
import TodoModel from "../models/TodoModel";

class TodoStore {
  todos: TodoModel[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getTodo() {}

  addTodo(id: number, todo: string, user: number, completed: boolean) {
    this.todos.push(new TodoModel(id, todo, user, completed));
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const todoStore = new TodoStore();
export default todoStore;
