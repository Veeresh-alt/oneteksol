import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {compose} from 'recompose';
import { getAuthorsQuery,addAuthorMutation, deleteAuthorMutation } from '../queries/queries';
import Header from './header';
import {Link} from 'react-router-dom'
class AuthorsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            authorId:'',
            name: '',
            age: ''
        }
    }

    handleAdd() {
        alert("Added a Course Successfully");
      }
    
      handleUpdate() {
        alert("Updated the course successfully");
      }
    
    submitForm(e){
        e.preventDefault()
        
        this.props.addAuthorMutation({
            variables: {
                name: this.state.name,
                age: this.state.age
            },
            refetchQueries: [{ query: getAuthorsQuery }]
        });
    }
    
    displayAuthors(e){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <div>Loading Authors...</div> );
        } else {
            return(<table className="table">
                <tr><td colSpan="5"><h3>Authors List</h3></td></tr>
                <tr>
                    <td>ID</td>
                    <td>Author Name</td>
                    <td>Age</td>
                    <td colSpan="2">Modification</td>
                </tr>
                 {data.authors.map(author => {
                return(
                    <tr className="tdl">
                        <td onLoad={(e) => this.setState({ authorId: e.target.value })}> {author.id} </td>
                        <td> {author.name} </td>
                        <td> {author.age} </td>
                        <td>
                        <Link to={`/UpdateAuthor/${author.id}`}><button className="btn btn-warning">Edit</button></Link>
                        </td>
                        <td>
                        <button className="btn btn-danger" onClick={e=>{
                            e.preventDefault()
                             console.log(author.id)
                             this.props.deleteAuthorMutation({variables:{authorId:author.id},
                                refetchQueries: [{ query: getAuthorsQuery }]})}} >Del</button>
                        </td>
                    </tr>        
                );
            })}
            </table>
            )
        }
    }

    render(){
        return(
            <div>
                <Header />
            <div className="addbookdiv">
                <div className="authorlistdiv">
            { this.displayAuthors() }
            </div>
                {/* <DeleteAuthor /> */}
                <div className="addAuthorlist">
                {/* <form onSubmit={ this.submitForm.bind(this) } > */}
                    <div className="updatediv">
                    <Link to="/Addauthor"><button className="btn btn-success">Add Author</button></Link>
                {/* <Link to="/Update/1"> Update Author</Link> */}
                    {/* <label>Author name:</label> <br />
                    <input type="text" className="form-control" onChange={ (e) => this.setState({ name: e.target.value }) } required />

            
                    <label>age:</label> <br />
                    <input type="text" className="form-control" onChange={ (e) => this.setState({ age: e.target.value }) } required />
                <button className="btn btn-success">Add</button> */}
                </div>
            {/* </form> */}
                </div>
            </div>
            </div>
        );
    }
}

export default compose
(graphql(getAuthorsQuery, {name:"getAuthorsQuery"}),
graphql(addAuthorMutation, { name: "addAuthorMutation"}),
graphql(deleteAuthorMutation, {name:"deleteAuthorMutation"})
)(AuthorsList);



//{/* <button onClick={e => {e.preventDefault(); deleteAuthor({                   
    //variables:{id: author.id}, refetchQueries: [{query: getAuthorsQuery}]}).catch(error => {
    //alert("Cannot delete this Student");
  //});
// }} >Del</button> */}









// onClick={this.deleteAuthor.bind(this)}