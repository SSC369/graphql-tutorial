import todoStore from "../../../store/TodoStore";
import { AddTodoSuccessResponseType } from "../../../types";

export const onSuccess: AddTodoSuccessResponseType = (data) => {
  const { id, todo, user, completed } = data.addTodo;
  todoStore.addTodo(id, todo, user, completed);
};

export const onFailure = () => {};
