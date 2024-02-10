import { gql } from '@apollo/client';

export default gql`
mutation updateMaterial(
    $id: ID!,
    $name: String!,
    $description: String!
) {
  updateMaterial(
    id: $id,
    name: $name,
    description: $description
) {
    message
  }
}
`;