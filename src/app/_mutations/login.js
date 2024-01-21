import { gql } from '@apollo/client';

export default gql`
mutation login($username: String!, $password: String!, $role: String!) {
  login(username: $username, password: $password, role: $role) {
    id,
    username,
    role,
    token
  }
}
`;