import {
  ApolloCache,
  ApolloError,
  ApolloQueryResult,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import TodoModel from "./models/TodoModel";

export interface EditTodoModalProps {
  close: () => void;
  todoData: TodoModel | null;
}

export interface TodoPropsType {
  todoData: TodoModel;
  setShowEditTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoModel | null>>;
}

export interface AddTodoModalProps {
  close: () => void;
}

export interface AddTodoFormData {
  todo: string;
}

export interface EditTodoFormData {
  todo: string;
  completed: boolean;
}

export interface TodoDataType {
  id: string;
  todo: string;
  user: number;
  completed: boolean;
  __typename: string;
}

export type AddTodoHookType = () => {
  loading: boolean;
  error: ApolloError | undefined;
  addTodo: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any>>;
};

export type EditTodoHookType = (todoInstance: TodoModel) => {
  editTodo: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any>>;
  loading: boolean;
  error: ApolloError | undefined;
};

export type DeleteTodoHookType = () => {
  deleteTodo: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any>>;
  loading: boolean;
  error: ApolloError | undefined;
};

export type GetTodosHookType = () => {
  isLoading: boolean;
  error: ApolloError | undefined;
  isError: boolean;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};

export type DeleteTodoSuccessResponseType = (data: {
  deleteTodo: {
    id: string;
  };
}) => void;

export type AddTodoSuccessResponseType = (data: {
  addTodo: TodoDataType;
}) => void;

export type EditTodoSuccessResponseType = (
  data: {
    editTodo: {
      todo: string;
      id: string;
      completed: boolean;
      user: number;
    };
  },
  todoInstance: TodoModel
) => void;

export type GetTodosSuccessResponseDataType = (data: {
  todos: { todosData: TodoDataType[] };
}) => void;

export type GetTodosFailureResponseDataType = (data: {
  todos: { error: string };
}) => void;
