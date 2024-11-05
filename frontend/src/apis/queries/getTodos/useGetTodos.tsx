import { NetworkStatus, useQuery } from "@apollo/client";

import { GET_TODOS } from "./getTodos";
import { GetTodosHookType } from "../../../types";
import { onFailure, onSuccess } from "./responseHandler";

const useGetTodos: GetTodosHookType = () => {
  const { networkStatus, error, refetch } = useQuery(GET_TODOS, {
    variables: {},
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.todos.__typename === "Success") {
        onSuccess(data);
      } else {
        onFailure(data);
      }
    },
  });

  const isLoading = networkStatus === NetworkStatus.loading;
  const isError = networkStatus === NetworkStatus.error;
  return { isLoading, error, isError, refetch };
};

export default useGetTodos;
