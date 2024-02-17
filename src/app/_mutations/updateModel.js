import { gql } from '@apollo/client';

export default gql`
mutation updateModel(
    $id: ID!,
    $name: String!
) {
  updateModel(
    id: $id,
    name: $name
) {
    message
  }
}
`;