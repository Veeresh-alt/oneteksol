import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery, updateAuthorMutation, addAuthorMutation } from '../queries/queries';
import { useMutation } from "@apollo/react-hooks";
import Add from './reuse'

function UpdateAuthor(props) {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    

      const [createBook] = useMutation(addAuthorMutation, {
        variables: {
          name: name,
          age:age,
        },
        refetchQueries: [{query: getAuthorsQuery}]
      });

   const addForm = (e) => {
      e.preventDefault();
      createBook().catch(error => {
        console.log(error);
      });

      setName(name);
      setAge(age);
      console.log(name)
      console.log(age)
    }

    const [updateAuthor] = useMutation(updateAuthorMutation, {
      variables: {
        id: id,
        name: name,
        age:age,       
      },
      refetchQueries: [{query: getAuthorsQuery}]
    });
      
    
    if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;
    
    return (
    
    <div>
           
           {props.buttonTitle == "Add" &&
            <Add
            setName = {setName}
            setAge = {setAge}
            onSubmit = {addForm}
            button = "Add Author"
            title = "Add Author"
            name = {name}
            age = {age}
            />
          }
          {props.buttonTitle == "Update" &&
          data.authors.map(author => {
           const id = props.match.params.id
            if(id == author.id){
             
              const updateForm = (e) => {
                e.preventDefault();
                updateAuthor().catch(error => {
                  console.log(error);
                });
                setId(author.id);
                if(name === ""){
                  setName(author.name);
                }else{
                  setName(name);
                }
                if(age === ""){
                  setAge(author.age);
                }else{
                  setAge(age);
                }                
              }   
              
            return(
              <div>
                
            <Add
            setName = {setName}
            setAge = {setAge}
            onSubmit = {updateForm}
            button = "Update Author"
            title = "Update Author"
            name = {author.name}
            age = {author.age}
            />
                </div>
            )}
          })}
    </div>
    )
        }

export default UpdateAuthor