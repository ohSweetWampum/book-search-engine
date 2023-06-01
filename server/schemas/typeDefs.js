const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    book: [Book]
    user(_id: String): [user]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(_id: String!): User
    login(email: String!, password: String!): Auth
    saveBook(
      _id: String!
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
    ): User
  }
`;

module.exports = typeDefs;
