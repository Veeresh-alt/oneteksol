const { GraphQLServer, GraphQLNonNull, GraphQLID,
  GraphQLInt, GraphQLString } =  require('graphql-yoga');
// const graphql =require('graphql');
// const {  GraphQLSchema }= graphql;

const knex = require('knex')({
  client: 'mysql',
  connection:{
    host: 'localhost',
    user:'root',
    password: '',
    database: 'graphql'
  }
});

const typeDefs = ` 

  type Books
  {
    id:ID!,
    name:String!,
    genre: String!,
    authorid : ID!,
    authorname:[Authors]
  }

  type Authors
  {
    id:ID!,
    name: String!,
    age: ID!,
    books:Authors
  }

  type AuthorName
  {
    id:ID!,
    name:String!
  }
  
  type Query {
    books : [Books],
    book(id: ID!): Books,
    authors: [Authors],
    author(id:ID!): Authors,
    
  }
    
  type Mutation{
    CreateBook(
      name:String!,
      genre:String!,
      authorid: ID!):Books
  
    AddAuthor(
      name:String!,
      age:ID!):Authors

      updateBook(
        id:ID!,
        name:String!,
      genre:String!,
      authorid: ID!
        ): Boolean

      deleteBook(id: ID!) : Boolean

      updateAuthor(
        id:ID!,
        name:String!,
      age:ID!
        ): Boolean

      deleteAuthor(id: ID!) : Boolean
  }`

const resolvers = {
      Query: {
    books: () => knex("books").select("*"),
    book : async(_,{id}) =>{ return await knex("books").where({id}).first().select("*")},
    authors: () => knex("authors").select("*"),
    author : async(_,{id}) =>{ return await knex("authors").where({id}).first().select("*")},
  },

 
  Mutation: {

    CreateBook: async(_,{name, genre, authorid}) =>{
      const [book] = await knex("books")
          // .returning("*")
          .insert({ name, genre, authorid});
          return book.results;
    },
    AddAuthor: async(_,{name, age}) =>{
      const [author] = await knex("authors")
          // .returning("*")
          .insert({ name, age});
      return author.results;
    },

    updateBook: async(_, {id, name, genre, authorid}) =>{
      const isUpdated = await knex("books")
      .where({id})
      .update({name, genre, authorid});
      return isUpdated;
    },

    deleteBook: async(_,{id}) => {
      const isDeleted = await knex("books")
        .where({id})
        .del();
      return isDeleted.results;
    },

    updateAuthor: async(_, {id, name, age}) =>{
      const isUpdated = await knex("authors")
      .where({id})
      .update({name, age});
      return isUpdated
    },

    deleteAuthor: async(_,{id}) => {
      const isDeleted = await knex("authors")
        .where({id})
        .del();
      return isDeleted.results;
    },
  }

  }

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))



































// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();

// const port = process.env.PORT || 4000

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:true
// }));


// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql:true
// }));

// app.listen(port, () => console.log(`app listening to ${port}`))