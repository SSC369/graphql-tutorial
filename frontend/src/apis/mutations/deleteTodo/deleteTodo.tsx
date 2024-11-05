import { DocumentNode, gql } from "@apollo/client";

export const DELETE_TODO: DocumentNode = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
