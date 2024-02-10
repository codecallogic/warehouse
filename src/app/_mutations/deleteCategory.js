import { gql } from '@apollo/client';

export default gql`
mutation deleteCategory(
    $id: ID!
) {
  deleteCategory(
    id: $id
) {
    message
  }
}
`;