let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');
let server = require('./index')

// const {Pool,Client} = require('pg');
// const connectionString = 'postgressql://postgres:courseque@localhost:5432/courseque'

// const knex = require('knex')({
//     client: 'pg',
//     connection:{
//       host: 'localhost',
//       user:'postgres',
//       password: 'courseque',
//       database: 'courseque'
//     }
//   });

// const client = new Client({
//   connectionString:connectionString
// })

// const schema = buildSchema( ` 

//   type Enquiries
//   {
//     id:ID!,
//     name:String!,
//     email:String!,
//     course:String!,
//     comments:String!,
//     contact:String!,
//   }

//   type Users
//   {
//     id:ID!,
//     username:String!,
//     password:String!,
//     role:String
//   }
  
//   type Courses
//   {
//     id:ID!,
//     name:String!,
//     fees:String!,
//     description:String!
//   }
  
//   type Query {
//     enquiries : [Enquiries], 
//     enquiry(id:ID!):Enquiries,
//     users:[Users],
//     user(id:ID!):Users
//     courses:[Courses]
//     course(id:ID!):Courses
//   }
    
//   type Mutation{
//     CreateEnquiry(
//     name:String!,
//     email:String!,
//     course:String!,
//     comments:String!,
//     contact:String!
//     ):Enquiries

//     CreateCourse(
//     name:String!,
//     fees:String!,
//     description:String!
//     ):Courses

//     CreateUser(
//       username:String!,
//       password:String!,
//       role:String
//       ):Users
//   }`);

// const root = {
//       Query: {
//         // enquiries: () => knex("enquiries").select("*"),
//         // enquiry : async(_,{id}) =>{ return await knex("enquiries").where({id}).first().select("*")},
//         users: () => knex("users").select("*"),
//         user : async(_,{id}) =>{ return await knex("users").where({id}).first().select("*")},
//         courses: () => knex("courses").select("*"),
//         course : async(_,{id}) =>{ return await knex("course").where({id}).first().select("*")},
        
//         enquiries:() => client.enquiries.list(),
        
//         //resolver function for studentbyId
//    enquiry:(root,args,context,info) => {
//     //args will contain parameter passed in query
//     return client.enquiries.get(args.id);}
//   },

 
//   Mutation: {
//     CreateEnquiry: async(_,{name, email, course, comments, contact}) =>{
//         const [enquiry] = await knex("enquiries")
//           .returning("*")
//           .insert({name, email, course, comments, contact});
//           return enquiry;},

//           CreateCourse: async(_,{name, fees, description}) =>{
//             const [course] = await knex("courses")
//               .returning("*")
//               .insert({name, fees, description});
//               return course;},
          
//             CreateUser: async(_,{username, password, role}) =>{
//                 const [user] = await knex("users")
//                   .returning("*")
//                   .insert({username, password, role});
//                   return user;},
//   }
//   }
  

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

var app = express();

app.use('/veeresh', server({
    
}));
app.listen(5000);
console.log('Running a GraphQL API server at http://localhost:5000/graphql');