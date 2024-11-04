import { NetworkStatus, useQuery } from "@apollo/client";
import todoStore from "../store/TodoStore";
import { GET_TODOS } from "../queries/getTodos";
import { GetTodosHookType } from "../types";

const useGetTodos: GetTodosHookType = () => {
  const { networkStatus, error, refetch } = useQuery(GET_TODOS, {
    variables: {},
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.todos.__typename === "Success") {
        todoStore.addTodoDataIntoStore(data.todos.todosData);
      } else {
        alert(data.todos.error);
      }
    },
  });

  const isLoading = networkStatus === NetworkStatus.loading;
  const isError = networkStatus === NetworkStatus.error;
  return { isLoading, error, isError, refetch };
};

export default useGetTodos;
