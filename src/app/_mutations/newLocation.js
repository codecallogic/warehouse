import { gql } from '@apollo/client';

export default gql`
mutation newLocation(
    $name: String!
) {
  newLocation(
    name: $name
) {
    message
  }
}
`;