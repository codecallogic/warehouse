import { gql } from '@apollo/client';

export default gql`
mutation newSlab(
    $material: [MaterialInputType!]!, 
    $color: [ColorInputType!]!, 
    $supplier: [SupplierInputType!]!, 
    $grade: [GradeInputType!]!, 
    $finish: [FinishInputType!]!, 
    $location: [LocationInputType!]!,
    $quantity: String!,
    $sizeOne: String!,
    $sizeTwo: String!,
    $thickness: String!,
    $priceSlab: String!,
    $priceSqft: String!,
    $block: String!,
    $orderedStatus: String!,
    $receivedStatus: String!,
    $deliveredStatus: String!,
    $lotNumber: String!,
    $qrCode: String!,
    $images: [ImageInputType!]!
) {
  newSlab(
    material: $material, 
    color: $color, 
    supplier: $supplier, 
    grade: $grade, 
    finish: $finish,
    location: $location,
    quantity: $quantity,
    sizeOne: $sizeOne,
    sizeTwo: $sizeTwo,
    thickness: $thickness,
    priceSlab: $priceSlab,
    priceSqft: $priceSqft,
    block: $block,
    orderedStatus: $orderedStatus,
    receivedStatus: $receivedStatus,
    deliveredStatus: $deliveredStatus,
    lotNumber: $lotNumber,
    qrCode: $qrCode,
    images: $images
) {
    message
  }
}
`;