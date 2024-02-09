import { gql } from '@apollo/client';

export default gql`
query allCategories($id: ID!, $token: String!) {
  allCategories(id: $id, token: $token){
    id,
    name
  }
}`