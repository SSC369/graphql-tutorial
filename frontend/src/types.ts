export interface TodoType {
  id: number;
  todo: string;
  user: number;
  completed: boolean;
}

export interface EditTodoModalProps {
  close: () => void;
  editTodoData: TodoType | null;
}

export interface TodoPropsType {
  todoData: TodoType;
  setShowEditTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoType | null>>;
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
