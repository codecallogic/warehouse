import { gql } from '@apollo/client';

export default gql`
mutation newColor(
    $name: String!
) {
  newColor(
    name: $name
) {
    message
  }
}
`;