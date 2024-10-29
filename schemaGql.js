import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    menu: String
  }

  type MenuList {
    _id: String
    name: String
    recipe: String
    category: String
    image: String
    price: Float
  }
`;

export default typeDefs;
