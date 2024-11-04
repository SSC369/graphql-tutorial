import { DocumentNode, gql } from "@apollo/client";

// ADD_TODO is a document node which consists with group of queries
export const ADD_TODO: DocumentNode = gql`
  mutation AddTodo($todo: String, $user: Int) {
    addTodo(todo: $todo, user: $user) {
      todo
      completed
      id
      user {
        name
      }
    }
  }
`;
