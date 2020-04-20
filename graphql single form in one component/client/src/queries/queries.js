import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
            age
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            id
            name
            genre
            authorid
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        CreateBook(name: $name, genre: $genre, authorid: $authorId){
            authorid
            genre
            name
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation ($name: String!, $age: ID!){
        AddAuthor(name: $name, age: $age){
            name
            age
        }
    }
`;

const deleteBookMutation = gql`
mutation ($bookID:ID!){
    deleteBook(id:$bookID)
}
`;

const deleteAuthorMutation = gql`
mutation ($authorId:ID!){
    deleteAuthor(id:$authorId)
}
`;
const updateBookMutation = gql`
mutation ($id:ID!,$name:String!, $genre:String!,$authorid:ID!){
    updateBook(id:$id, name:$name, genre:$genre, authorid:$authorid)
}
`;
const updateAuthorMutation = gql`
mutation ($id:ID!,$name:String!, $age:ID!){
    updateAuthor(id:$id,name:$name, age:$age)
}
`;

export { 
    getAuthorsQuery, 
    getBooksQuery, 
    addBookMutation, 
    addAuthorMutation, 
    deleteBookMutation, 
    deleteAuthorMutation, 
    updateAuthorMutation, 
    updateBookMutation };
