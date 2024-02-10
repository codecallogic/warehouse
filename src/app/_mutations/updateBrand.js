import { gql } from '@apollo/client';

export default gql`
mutation  updateBrand(
    $id: ID!,
    $name: String!
) {
  updateBrand(
    id: $id,
    name: $name
) {
    message
  }
}
`;