import { gql } from '@apollo/client';

export default gql`
query allMaterials($id: ID!, $token: String!) {
  allMaterials(id: $id, token: $token){
    id,
    name,
    description
  }
}`