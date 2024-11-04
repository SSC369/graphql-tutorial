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
  id: number;
  todo: string;
  user: number;
  completed: boolean;
  __typename: string;
}
