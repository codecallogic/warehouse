import { gql } from '@apollo/client';

export default gql`
mutation newMaterial(
    $name: String!,
    $description: String!
) {
  newMaterial(
    name: $name,
    description: $description
) {
    message
  }
}
`;