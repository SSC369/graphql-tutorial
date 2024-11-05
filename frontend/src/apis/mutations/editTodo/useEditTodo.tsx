import { useMutation } from "@apollo/client";
import { EDIT_TODO } from "./editTodo";
import { EditTodoHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useEditTodo: EditTodoHookType = (todoInstance) => {
  const [editTodo, { loading, error }] = useMutation(EDIT_TODO, {
    onCompleted: (data) => {
      onSuccess(data, todoInstance);
    },
  });

  return { editTodo, loading, error };
};

export default useEditTodo;
