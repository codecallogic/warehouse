import { gql } from '@apollo/client';

export default gql`
mutation deleteProduct(
    $id: ID!
) {
  deleteProduct (
    id: $id
) {
    message
  }
}
`;