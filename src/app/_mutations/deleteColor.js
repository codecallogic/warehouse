import { gql } from '@apollo/client';

export default gql`
mutation deleteColor(
    $id: ID!
) {
  deleteColor (
    id: $id
) {
    message
  }
}
`;