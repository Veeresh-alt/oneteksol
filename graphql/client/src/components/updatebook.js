import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from "recompose";
import {  updateBookMutation, getBooksQuery } from '../queries/queries';

    class UpdateBook extends Component {
        constructor(props){
            super(props);
            this.state = {
                id: '',
                name: '',
                genre: '',
                authorid: ''
            };
        }
        submitForm(e){
            e.preventDefault()
    
            this.props.updateBookMutation({
                variables: {
                    id:this.state.id,
                    name: this.state.name,
                    genre: this.state.genre,
                    authorid: this.state.authorid
                },
                refetchQueries: [{ query: getBooksQuery }]
            });
        }
        render() { 
            return (<div>
                    <h1>Update Book</h1>
                    <form onSubmit={ this.submitForm.bind(this) } >
                    <div>
                    <label>Book id:</label><br />
                    <input type="text" onChange={ (e) => this.setState({ id: e.target.value }) } />
                </div>        
                <div>
                    <label>Book name:</label><br />
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Book Genre:</label><br />
                    <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Authorid:</label><br />
                    <input type="text" onChange={ (e) => this.setState({ authorid: e.target.value }) } />
                </div>
                <button>Update</button>
            </form>
            </div>);
        }
    }

    export default  compose(graphql(updateBookMutation, {name: "updateBookMutation"}))(UpdateBook);