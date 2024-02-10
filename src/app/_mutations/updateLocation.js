import { gql } from '@apollo/client';

export default gql`
mutation updateLocation(
    $id: ID!,
    $name: String!
) {
  updateLocation(
    id: $id,
    name: $name
) {
    message
  }
}
`;