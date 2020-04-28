const port = process.env.PORT || 8000
const { GraphQLServer } =  require('graphql-yoga');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors());

let transporter = nodemailer.createTransport({
  host: "mail.oneteksol.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'veereshkali@oneteksol.com',
      pass: 'Kveeresh@4'
    }
  });
  app.use('/mail', (req, res)=>{
    res.send('Test mail checking')      
      var mailOptions = {
        from: 'veereshkali@oneteksol.com',
        to: 'veereshkali9@gmail.com',
        subject: 'Sending Email using Node.js',
        html: '<h1>Kali Veeresh</h1>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})


const knex = require('knex')({
  client: 'pg',
  connection:{
    host: 'localhost',
    user:'postgres',
    password: 'courseque',
    database: 'courseque'
  }
});

const typeDefs = ` 

  type Enquiries
  {
    id:ID!,
    name:String!,
    email:String!,
    course:String!,
    comments:String!,
    contact:String!,
  }

  type Users
  {
    id:ID!,
    username:String!,
    password:String!,
    role:String
  }
  
  type Courses
  {
    id:ID!,
    name:String!,
    fees:String!,
    description:String!
  }
  
  type Query {
    enquiries : [Enquiries], 
    enquiry(id:ID!):Enquiries,
    users:[Users],
    user(id:ID!):Users
    courses:[Courses]
    course(id:ID!):Courses
  }
    
  type Mutation{
    CreateEnquiry(
    name:String!,
    email:String!,
    course:String!,
    comments:String!,
    contact:String!
    ):Enquiries

    CreateCourse(
    name:String!,
    fees:String!,
    description:String!
    ):Courses

    CreateUser(
      username:String!,
      password:String!,
      role:String
      ):Users
  }`

const resolvers = {
      Query: {
        enquiries: () => knex("enquiries").select("*"),
        enquiry : async(_,{id}) =>{ return await knex("enquiries").where({id}).first().select("*")},
        users: () => knex("users").select("*"),
        user : async(_,{id}) =>{ return await knex("users").where({id}).first().select("*")},
        courses: () => knex("courses").select("*"),
        course : async(_,{id}) =>{ return await knex("course").where({id}).first().select("*")},
  },

 
  Mutation: {
    CreateEnquiry: async(_,{name, email, course, comments, contact}) =>{
        const [enquiry] = await knex("enquiries")
          .returning("*")
          .insert({name, email, course, comments, contact});
          return enquiry;},

          CreateCourse: async(_,{name, fees, description}) =>{
            const [course] = await knex("courses")
              .returning("*")
              .insert({name, fees, description});
              return course;},
          
            CreateUser: async(_,{username, password, role}) =>{
                const [user] = await knex("users")
                  .returning("*")
                  .insert({username, password, role});
                  return user;},
  }
  }


// const server = new GraphQLServer({ typeDefs, resolvers })
// server.start(() => console.log('Server is running on localhost:4000'))



const options = {
  port: 7000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, ({ port }) =>
  console.log(
    `Graphql started, listening on port ${port} for incoming requests.`,
  ),
)

app.use('/check', function(req, res){

})

app.listen(port, () => console.log(`express app listening to ${port}`))