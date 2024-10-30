import { gql } from "@apollo/client";

export const EDIT_TODO = gql`
  mutation EditTodo($todoData: TodoInput) {
    editTodo(todoData: $todoData) {
      todo
      id
      completed
      user {
        name
      }
    }
  }
`;
