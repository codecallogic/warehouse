import { gql } from '@apollo/client';

export default gql`
mutation newModel(
    $name: String!
) {
  newModel(
    name: $name
) {
    message
  }
}
`;