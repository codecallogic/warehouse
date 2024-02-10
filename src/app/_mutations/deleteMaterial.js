import { gql } from '@apollo/client';

export default gql`
mutation deleteMaterial(
    $id: ID!
) {
  deleteMaterial (
    id: $id
) {
    message
  }
}
`;