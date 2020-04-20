import React from 'react';
import './App.css';
import ApolloClient  from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './components/Home'
import BookList from './components/BookList';
import AuthorsList from './components/AuthorsList';
import UpdateBooks from './components/update';
import UpdateAuthor from './components/updateAuthor'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <ApolloProvider client={ client } >
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/BookList" component={BookList} />
      <Route  path="/AuthorsList" component={AuthorsList} />
      <Route
              path="/AddAuthor"
              render={() => (
                <UpdateAuthor
                  title="Add a Author"
                  buttonTitle="Add"
                  clicked={this.handleAdd}
                />
              )}
            />
            <Route
              path="/UpdateAuthor/:id"
              render={(props) => (
                <UpdateAuthor
                  title="Update the Author"
                  buttonTitle="Update"
                  clicked={this.handleUpdate}
                  {...props}
                />
              )}
            />
      <Route
              path="/AddBook"
              render={() => (
                <UpdateBooks
                  title="Add a Book"
                  buttonTitle="Add"
                  clicked={this.handleAdd}
                />
              )}
            />
            <Route
              path="/UpdateBook/:id"
              render={(props) => (
                <UpdateBooks
                  title="Update the Book"
                  buttonTitle="Update"
                  clicked={this.handleUpdate}
                  {...props}
                />
              )}
            />
    </Switch>
    </BrowserRouter>
    </ApolloProvider>
      );
  }
}
 
export default App;