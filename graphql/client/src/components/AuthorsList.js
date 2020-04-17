import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {compose} from 'recompose';
import { getAuthorsQuery,addAuthorMutation, deleteAuthorMutation } from '../queries/queries';
// import AddAuthor from './AddAuthor';
// import DeleteAuthor from './deleteAuthor'
import Header from './header';
// import deleteAuthor from './deleteAuthor'; 
class AuthorsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            authorid:'',
            name: '',
            age: ''
        }
    }
    
    deleteAuthor(){
        this.props.deleteAuthorMutation({
            variable: {
                authorid:this.state.authorid
            }
        })
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
                        <td key={ author.id } value={author.id} 
                        onChange={(e) => this.setState({ authorid: e.target.value })}> {author.id} </td>
                        <td> {author.name} </td>
                        <td> {author.age} </td>
                        <td><button className="btn btn-warning">Edit</button></td>
                        <td>
                        <button className="btn btn-danger" onSubmit={this.deleteAuthor.bind(this)}>Del</button>
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
                <form onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Author name:</label> <br />
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>age:</label> <br />
                    <input type="text" onChange={ (e) => this.setState({ age: e.target.value }) } />
                </div>
                <button className="btn btn-success">Add</button>
            </form>
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