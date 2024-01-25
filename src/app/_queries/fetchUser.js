import { gql } from '@apollo/client';

export default gql`
query User($id: ID!, $token: String!) {
  user(id: $id, token: $token){
    id,
    firstName,
    lastName,
    username,
    urlID,
    phoneNumber,
    password,
    role
  }
}`