import { gql } from '@apollo/client';

export default gql`
mutation DeleteProductImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!
) {
  deleteProductImage (
    id: $id,
    images: $images,
    url: $url
) {
    message
  }
}
`;