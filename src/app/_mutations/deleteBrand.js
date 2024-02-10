import { gql } from '@apollo/client';

export default gql`
mutation deleteBrand(
    $id: ID!
) {
  deleteBrand(
    id: $id
) {
    message
  }
}
`;