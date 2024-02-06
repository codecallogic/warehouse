import { gql } from '@apollo/client';

export default gql`
query allSuppliers($id: ID!, $token: String!) {
  allSuppliers(id: $id, token: $token){
    id,
    name,
    phone,
    address,
    taxID,
    notes,
    contactName,
    contactPhone,
    contactEmail,
    bank,
    account,
    agency,
    bankNote
  }
}`