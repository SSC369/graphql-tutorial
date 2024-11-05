import todoStore from "../../../store/TodoStore";
import {
  GetTodosFailureResponseDataType,
  GetTodosSuccessResponseDataType,
} from "../../../types";

export const onSuccess: GetTodosSuccessResponseDataType = (data) => {
  todoStore.addTodoDataIntoStore(data.todos.todosData);
};

export const onFailure: GetTodosFailureResponseDataType = (data) => {
  alert(data.todos.error);
};
