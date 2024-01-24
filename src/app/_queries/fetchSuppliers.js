import { gql } from '@apollo/client';

export default gql`
query allSuppliers($id: ID!, $token: String!) {
  allSuppliers(id: $id, token: $token){
    id,
    name,
    phone,
    address,
    tax_id,
    notes,
    contact_name,
    contact_phone,
    contact_email,
    bank,
    account,
    agency,
    bank_note
  }
}`