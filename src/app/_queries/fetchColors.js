import { gql } from '@apollo/client';

export default gql`
query allColors($id: ID!, $token: String!) {
  allColors(id: $id, token: $token){
    id,
    name
  }
}`