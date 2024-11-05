import { useMutation } from "@apollo/client";

import { DELETE_TODO } from "./deleteTodo";
import { DeleteTodoHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useDeleteTodo: DeleteTodoHookType = () => {
  const [deleteTodo, { loading, error }] = useMutation(DELETE_TODO, {
    onCompleted: (data) => {
      onSuccess(data);
    },
  });

  return { deleteTodo, loading, error };
};

export default useDeleteTodo;
