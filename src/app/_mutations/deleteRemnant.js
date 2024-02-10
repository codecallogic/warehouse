import { gql } from '@apollo/client';

export default gql`
mutation deleteRemnant(
    $id: ID!
) {
  deleteRemnant(
    id: $id
) {
    message
  }
}
`;