import { useMutation } from "@apollo/client";

import { ADD_TODO } from "./addTodo";
import { AddTodoHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useAddTodo: AddTodoHookType = () => {
  const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
    onCompleted: (data) => {
      onSuccess(data);
    },
  });

  return { addTodo, loading, error };
};

export default useAddTodo;
