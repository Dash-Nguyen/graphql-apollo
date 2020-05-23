import { gql } from "apollo-boost";

// Query
export const GET_ALL_EMPLOYEE = gql`
 {
  getAllUser {
    id,
    name,
    email,
    phoneNumber,
    address,
    createDate
    }
 }
`