import {gql} from 'apollo-boost';

const getEnquiryQuery = gql`
{
    enquiries{
    id
    name
    email
    course
    comments
    contact
    }
}
`;
const getCoursesQuery = gql`
{
    courses{
    id
    name
    fees
    description
    }
}
`;
const getUsersQuery = gql`
{
    users{
        id
        username
        password
        role
    }
}
`;
const addEnquiryMutation = gql`
    mutation CreateEnquiry($name:String!, $email:String!, $course:String!, $comments:String!, $contact:String!){
        CreateEnquiry(name:$name, email:$email, course:$course, comments:$comments, contact:$contact){
            name
            email
            course
            comments
            contact
        } }`;

export {getEnquiryQuery, addEnquiryMutation, getUsersQuery, getCoursesQuery};