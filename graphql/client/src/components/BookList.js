import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
// import DeleteBook from './deleteBook';
import Header from './header';
import AddBook from './AddBook';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    displayBooks(){
        var data = this.props.data;
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
            return(
                <tr className="tdl">
                    <td> {book.id} </td>
                    <td> {book.name} </td>
                    <td> {book.genre} </td>
                    <td> {book.authorid} </td>
                    <td><button className="btn btn-warning">Edit</button></td>
                    <td><button className="btn btn-danger">Del</button></td>
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
                <AddBook />
            </div>
            </div>
            </div>
        );
    }
}

export default ( graphql(getBooksQuery))(BookList);
