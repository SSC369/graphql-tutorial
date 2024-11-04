import { makeAutoObservable } from "mobx";
import TodoModel from "../models/TodoModel";
import { TodoDataType } from "../types";

class TodoStore {
  todos: TodoModel[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getTodo() {}

  addTodo(id: string, todo: string, user: number, completed: boolean) {
    this.todos.push(new TodoModel(id, todo, user, completed));
  }

  addTodoDataIntoStore(todoData: TodoDataType[]) {
    todoData.forEach((eachTodo) => {
      const { id, todo, completed, user } = eachTodo;
      this.addTodo(id, todo, user, completed);
    });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => parseInt(todo.id) !== id);
  }
}

const todoStore = new TodoStore();
export default todoStore;
