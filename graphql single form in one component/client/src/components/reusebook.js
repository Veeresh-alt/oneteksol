import React from 'react'
import Header from './header';
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery } from '../queries/queries';



function DisplayAuthors(){
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if(loading){
        return( <option disabled>Loading authors</option> );
    }
    if(error) return `Error! ${error.message}`; 
  
    else {
      return data.authors.map(author => {
          return( <option key={ author.id } value={author.id}>{ author.name }</option> );
      });
  }
  }
  

function Books(props){
    return(
       <div >
            <Header />
            <div className='col-sm-12 addbookdiv'>
            <div className="updatediv">
        <form name = "myForm" onSubmit={props.onSubmit} className="myForm">          
        <h3>{props.title}</h3>
            <label>Book Name</label>
            <input className="form-control" type="text" name="name" 
            defaultValue={props.name}  onChange={e => props.setName(e.target.value)} 
            placeholder='Enter a Book name' required />
            
            <label>Genre</label>
            <input className="form-control" type="text" name="genre" 
            defaultValue={props.genre} onChange={e => props.setGenre(e.target.value)} 
            placeholder="Genre" required />
            <label>Author</label>
        <select name="authorid" className="form-control" defaultValue={props.authorid} 
        onChange={ (e) => props.setAuthorid( e.target.value ) } >
                <option>Select author</option>
                <DisplayAuthors />
            </select>   
       
            <button type="submit" className='btn btn-success' >{props.button}</button>
        </form>
        </div>
        </div>
       </div>
    )
}
export default Books