import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getBooksQuery, updateBookMutation, addBookMutation } from '../queries/queries';
import "../App.css"
import { useMutation } from "@apollo/react-hooks";
import Books from './reusebook'



function UpdateBooks(props) {

    const { loading, error, data } = useQuery(getBooksQuery);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorid, setAuthorid] = useState("");
    

      const [createBook] = useMutation(addBookMutation, {
        variables: {
          name: name,
          genre:genre,
          authorid: authorid,
          
        },
        refetchQueries: [{query: getBooksQuery}]
      });

   const addForm = (e) => {
      e.preventDefault();
      createBook().catch(error => {
        console.log(error);
      });

      setName(name);
      setGenre(genre);
      setAuthorid(authorid)
      console.log(name)
      console.log(genre)
      console.log(authorid)
      
    }

    const [updateBook] = useMutation(updateBookMutation, {
      variables: {
        id: id,
        name: name,
        genre:genre,
        authorid: authorid,
        
      },
      refetchQueries: [{query: getBooksQuery}]
    });
      
    
    if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;
    
    return (
    
    <div>
           
           {props.buttonTitle === "Add" &&
            <Books
            setName = {setName}
            setGenre = {setGenre}
            setAuthorid = {setAuthorid}
            onSubmit = {addForm}
            button = "Add Book"
            title = "Add Book"
            name = {name}
            genre = {genre}
            authorid = {authorid}
            />
          }
          {props.buttonTitle === "Update" &&
          data.books.map(book => {
           const id = props.match.params.id
            if(id == book.id){
             
              const updateForm = (e) => {
                e.preventDefault();
                updateBook().catch(error => {
                  console.log(error);
                });
                setId(book.id);
                if(name == ""){
                  setName(book.name);
                }else{
                  setName(name);
                }
                if(genre == ""){
                  setGenre(book.genre);
                }else{
                  setGenre(genre);
                }
                if(authorid == ""){
                  setAuthorid(book.authorid);
                }else{
                  setAuthorid(authorid);
                }
                
              }   
              
            return(
              <div>
                
            <Books
            setName = {setName}
            setGenre = {setGenre}
            setAuthorid = {setAuthorid}
            onSubmit = {updateForm}
            button = "Update Book"
            title = "Update Book"
            name = {book.name}
            genre = {book.genre}
            authorid = {book.authorid}
            />
          </div>
            )}
          })}
    </div>
    )
        }

export default UpdateBooks