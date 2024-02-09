import { gql } from '@apollo/client';

export default gql`
mutation newProduct(
    $brand: [BrandInputType!]!, 
    $model: [ModelInputType!]!,
    $category: [CategoryInputType!]!,
    $color: [ColorInputType!]!, 
    $location: [LocationInputType!]!,
    $quantity: String!,
    $description: String!,
    $price: String!,
    $qrCode: String!,
    $images: [ImageInputType!]!
) {
  newProduct(
    brand: $brand, 
    model: $model,
    category: $category,
    color: $color,
    location: $location,
    quantity: $quantity,
    description: $description,
    price: $price,
    qrCode: $qrCode,
    images: $images
) {
    message
  }
}
`;