import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from "recompose";
import { deleteBookMutation, getBooksQuery } from '../queries/queries';
import DeleteAuthor from './deleteAuthor'


class DeleteBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            namE:''
        };
    }
    
    displayBooks(){
        var data = this.props.getBooksQuery;
        if(data.loading){
            return( <option disabled>Loading books</option> );
        } else {
            return data.books.map(book => {
                return( <option key={ book.id } value={book.name}>{ book.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()

        this.props.deleteBookMutation({
            variables: {
                namE: this.state.namE
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }
    render(){
        return(
            <div>
            <form id="delete-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="field"><br />
                    <label>Books:</label><br />
                    <select onChange={ (e) => this.setState({ namE: e.target.value }) } >
                        <option>Select book</option>
                        { this.displayBooks() }
                    </select>
                </div>
                <button>Delete</button>
            </form>
            <DeleteAuthor />
            </div>
        );
    }
}

export default compose(
    graphql(getBooksQuery, { name: "getBooksQuery" }),
    graphql(deleteBookMutation, { name: "deleteBookMutation" })
)(DeleteBook);