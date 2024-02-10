import { gql } from '@apollo/client';

export default gql`
mutation DeleteRemnantImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!
) {
  deleteRemnantImage (
    id: $id,
    images: $images,
    url: $url
) {
    message
  }
}
`;