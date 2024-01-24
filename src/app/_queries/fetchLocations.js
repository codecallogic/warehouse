import { gql } from '@apollo/client';

export default gql`
query allLocations($id: ID!, $token: String!) {
  allLocations(id: $id, token: $token){
    id,
    name
  }
}`