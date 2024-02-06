import { gql } from '@apollo/client';

export default gql`
mutation NewSlab(
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
    $slabPrice: String!,
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
    slabPrice: $slabPrice,
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