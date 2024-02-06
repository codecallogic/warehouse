import { gql } from '@apollo/client';

export default gql`
query allSlabs($id: ID!, $token: String!) {
  allSlabs(id: $id, token: $token){
    id,
    material {
      id
      name
      description
    },
    color {
      id,
      name
    },
    supplier {
      id,
      name,
      phone,
      address,
      taxID,
      notes,
      contactName,
      contactPhone,
      contactEmail,
      bank,
      account,
      agency,
      bankNote
    },
    location {
      name
    },
    grade,
    finish,
    quantity,
    sizeOne,
    sizeTwo,
    thickness,
    priceSlab,
    priceSqft,
    block,
    orderedStatus,
    receivedStatus,
    deliveredStatus,
    lotNumber,
    deliveryDate,
    qrCode,
    images {
      url
    }
  }
}`