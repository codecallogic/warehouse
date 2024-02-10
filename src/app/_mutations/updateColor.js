import { gql } from '@apollo/client';

export default gql`
mutation  updateColor(
    $id: ID!,
    $name: String!
) {
  updateColor(
    id: $id,
    name: $name
) {
    message
  }
}
`;