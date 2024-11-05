import { EditTodoSuccessResponseType } from "../../../types";

export const onSuccess: EditTodoSuccessResponseType = (data, todoInstance) => {
  const { todo, completed } = data.editTodo;
  todoInstance?.editTodo(todo, completed);
};

export const onFailure = () => {};
