import { DocumentNode, gql } from "@apollo/client";

export const GET_TODOS: DocumentNode = gql`
  query GetTodos {
    todos {
      todo
      id
      completed
      user {
        name
      }
    }
  }
`;
