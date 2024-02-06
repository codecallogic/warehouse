import { gql } from '@apollo/client';

export default gql`
mutation DeleteSlabImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!
) {
  deleteSlabImage (
    id: $id,
    images: $images,
    url: $url
) {
    message
  }
}
`;