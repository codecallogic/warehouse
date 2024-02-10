import { gql } from '@apollo/client';

export default gql`
mutation newCategory(
    $name: String!
) {
  newCategory(
    name: $name
) {
    message
  }
}
`;