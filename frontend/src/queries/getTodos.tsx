import { DocumentNode, gql } from "@apollo/client";

export const GET_TODOS: DocumentNode = gql`
  query GetTodos {
    todos {
      __typename
      ... on Success {
        todosData {
          todo
          id
          completed
          user
        }
      }
      ... on Failure {
        error
      }
    }
  }
`;
