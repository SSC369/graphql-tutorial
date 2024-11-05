import { DocumentNode, gql } from "@apollo/client";

export const EDIT_TODO: DocumentNode = gql`
  mutation EditTodo($todoData: TodoInput) {
    editTodo(todoData: $todoData) {
      todo
      id
      completed
      user
    }
  }
`;
