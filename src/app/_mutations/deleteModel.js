import { gql } from '@apollo/client';

export default gql`
mutation deleteModel(
    $id: ID!
) {
  deleteModel(
    id: $id
) {
    message
  }
}
`;