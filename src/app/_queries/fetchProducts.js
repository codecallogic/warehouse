import { gql } from '@apollo/client';

export default gql`
query allProducts($id: ID!, $token: String!) {
  allProducts(id: $id, token: $token){
    id,
    brand {
      id
      name
    },
    model {
      id
      name
    },
    category {
      id
      name
    },
    color {
      id,
      name
    },
    location {
      id,
      name
    },
    quantity,
    description,
    price,
    qrCode,
    images {
      url
    }
  }
}`