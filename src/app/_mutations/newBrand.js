import { gql } from '@apollo/client';

export default gql`
mutation newBrand(
    $name: String!
) {
  newBrand(
    name: $name
) {
    message
  }
}
`;