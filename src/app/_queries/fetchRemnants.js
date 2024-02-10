import { gql } from '@apollo/client';

export default gql`
query allRemnants($id: ID!, $token: String!) {
  allRemnants(id: $id, token: $token){
    id,
    material {
      id
      name
    },
    color {
      id,
      name
    },
    name,
    shape,
    l1,
    w1,
    l2,
    w2,
    notes,
    lot,
    bundle,
    supplierRef,
    bin,
    qrCode,
    images {
      url
    }
  }
}`