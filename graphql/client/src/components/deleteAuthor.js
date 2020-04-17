import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from "recompose";
import { deleteAuthorMutation, getAuthorsQuery } from '../queries/queries';


class DeleteAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            namE:''
        };
    }
    
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>Loading Author</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.name}>{ author.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()

        this.props.deleteAuthorMutation({
            variables: {
                namE: this.state.namE
            },
            refetchQueries: [{ query: getAuthorsQuery }]
        });
    }
    render(){
        return(
            <form id="delete-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="field"><br />
                    <label>authors:</label><br />
                    <select onChange={ (e) => this.setState({ namE: e.target.value }) } >
                        <option>Select Author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>Delete</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(deleteAuthorMutation, { name: "deleteAuthorMutation" })
)(DeleteAuthor);