import { gql } from '@apollo/client';

export default gql`
mutation deleteSlab(
    $id: ID!
) {
  deleteSlab (
    id: $id
) {
    message
  }
}
`;