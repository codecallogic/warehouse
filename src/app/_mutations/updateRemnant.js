import { gql } from '@apollo/client';

export default gql`
mutation updateRemnant(
    $id: ID!
    $material: [MaterialInputType!]!, 
    $color: [ColorInputType!]!, 
    $name: String!,
    $shape: String!,
    $l1: String!,
    $w1: String!,
    $l2: String!,
    $w2: String!,
    $notes: String!,
    $lot: String!,
    $bundle: String!,
    $supplierRef: String!,
    $bin: String!,
    $qrCode: String!,
    $images: [ImageInputType!]!
) {
  updateRemnant(
    id: $id,
    material: $material, 
    color: $color,
    name: $name,
    shape: $shape,
    l1: $l1,
    w1: $w1,
    l2: $l2,
    w2: $w2,
    notes: $notes,
    lot: $lot,
    bundle: $bundle,
    supplierRef: $supplierRef,
    bin: $bin,
    qrCode: $qrCode,
    images: $images
) {
    message
  }
}
`;