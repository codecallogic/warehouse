import { gql } from '@apollo/client';

export default gql`
mutation updateCategory(
    $id: ID!,
    $name: String!
) {
  updateCategory(
    id: $id,
    name: $name
) {
    message
  }
}
`;