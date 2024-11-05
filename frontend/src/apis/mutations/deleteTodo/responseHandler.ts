import todoStore from "../../../store/TodoStore";
import { DeleteTodoSuccessResponseType } from "../../../types";

export const onSuccess: DeleteTodoSuccessResponseType = (data) => {
  const { id } = data.deleteTodo;
  todoStore.removeTodo(parseInt(id));
};

export const onFailure = () => {};
