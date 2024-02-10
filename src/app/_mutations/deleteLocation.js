import { gql } from '@apollo/client';

export default gql`
mutation deleteLocation(
    $id: ID!
) {
  deleteLocation(
    id: $id
) {
    message
  }
}
`;