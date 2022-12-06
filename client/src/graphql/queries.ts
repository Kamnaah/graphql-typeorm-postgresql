import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
 query {
  getAllUsers{
    name
    username
    password
    id
  }
}
`;
