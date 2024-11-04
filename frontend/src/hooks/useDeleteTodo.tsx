import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../queries/deleteTodo";
import { DeleteTodoHookType } from "../types";
import todoStore from "../store/TodoStore";

const useDeleteTodo: DeleteTodoHookType = () => {
  const [deleteTodo, { loading, error }] = useMutation(DELETE_TODO, {
    onCompleted: (data) => {
      const { id } = data.deleteTodo;
      todoStore.removeTodo(parseInt(id));
    },
  });

  return { deleteTodo, loading, error };
};

export default useDeleteTodo;
