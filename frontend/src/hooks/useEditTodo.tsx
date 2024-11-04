import { useMutation } from "@apollo/client";
import { EDIT_TODO } from "../queries/editTodo";
import { EditTodoHookType } from "../types";

const useEditTodo: EditTodoHookType = (todoInstance) => {
  const [editTodo, { loading, error }] = useMutation(EDIT_TODO, {
    onCompleted: (data) => {
      const { todo, completed } = data.editTodo;
      todoInstance?.editTodo(todo, completed);
    },
  });

  return { editTodo, loading, error };
};

export default useEditTodo;
