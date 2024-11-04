import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../queries/addTodo";
import todoStore from "../store/TodoStore";
import { AddTodoHookType } from "../types";

const useAddTodo: AddTodoHookType = () => {
  const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
    onCompleted: (data) => {
      const { id, todo, user, completed } = data.addTodo;
      todoStore.addTodo(id, todo, user, completed);
    },
  });

  return { addTodo, loading, error };
};

export default useAddTodo;
