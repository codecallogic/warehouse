import { gql } from '@apollo/client';

export default gql`
query allSlabs($id: ID!, $token: String!) {
  allSlabs(id: $id, token: $token){
    id,
    name,
    description
  }
}`