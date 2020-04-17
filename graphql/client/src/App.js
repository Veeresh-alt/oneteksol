import React from 'react';
import './App.css';
import ApolloClient  from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './components/Home'
import BookList from './components/BookList';
import AuthorsList from './components/AuthorsList';
import DeleteBook from './components/deleteBook'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

function App() {
  return (
    <ApolloProvider client={ client } >
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/BookList" component={BookList} />
      <Route  path="/AuthorsList" component={AuthorsList} />
      <Route  path="/deleteBook" component={DeleteBook} />
    </Switch>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
