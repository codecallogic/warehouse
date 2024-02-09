import { gql } from '@apollo/client';

export default gql`
query allModels($id: ID!, $token: String!) {
  allModels(id: $id, token: $token){
    id,
    name
  }
}`