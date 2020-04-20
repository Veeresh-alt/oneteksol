import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {compose} from 'recompose';
import {getAuthorsQuery, getBooksQuery, deleteBookMutation } from '../queries/queries';
import {Link} from 'react-router-dom'
import Header from './header';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookID:'',
            authorid:''
        }
    }
    
    displayBooks(){
        var data = this.props.getBooksQuery;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return(<table className="table booktable">
            <tr><td colSpan="6"><h3>Books List</h3></td></tr>
            <tr>
                <td>ID</td>
                <td>Book Name</td>
                <td>Genre</td>
                <td>Author</td>
                <td colSpan="2">Modification</td>
            </tr>
             {data.books.map(book => {
            return( <tr className="tdl">
                    <td> {book.id} </td>
                    <td> {book.name} </td>
                    <td> {book.genre} </td>
                    <td> {book.authorid} </td>
                    <td>
                        <Link to={`/UpdateBook/${book.id}`}><button className="b btn btn-warning">Edit</button></Link>
                    </td>
                    <td>
                    <button className="b btn btn-danger" onClick={e=>{
                            e.preventDefault()
                             console.log(book.id)
                             this.props.deleteBookMutation({variables:{bookID:book.id},
                                refetchQueries: [{ query: getBooksQuery }]})}} >Del</button>
                    </td>
                </tr>
                            
            );
        })}
        </table>
        )
        }
    }
    render(){
        return(<div>
            <Header />
            <div className="addbookdiv">                
            <div className="authorlistdiv">
                    { this.displayBooks() }
            </div>
            <div className="addAuthorlist">
            <Link to="/AddBook"><button className="btn btn-success">Add Author</button></Link>
            </div>
            </div>
            </div>
        );
    }
}

export default compose
    (graphql(getBooksQuery,{name:"getBooksQuery"}),
    graphql(deleteBookMutation, {name:"deleteBookMutation"}),
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}))(BookList);
