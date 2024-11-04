class TodoModel {
  id: string;
  todo: string;
  user: number;
  completed: boolean;

  constructor(id: string, todo: string, user: number, completed: boolean) {
    this.id = id;
    this.todo = todo;
    this.user = user;
    this.completed = completed;
  }

  editTodo(todo: string, completed: boolean) {
    this.todo = todo;
    this.completed = completed;
  }
}

export default TodoModel;
