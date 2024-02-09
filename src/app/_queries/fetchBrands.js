import { gql } from '@apollo/client';

export default gql`
query allBrands($id: ID!, $token: String!) {
  allBrands(id: $id, token: $token){
    id,
    name
  }
}`