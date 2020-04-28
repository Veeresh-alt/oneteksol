import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Enquiry from './components/Enquiry';
import Login from './components/Login';
import LoginView from './components/LoginView'
import './App.css';

const client = new  ApolloClient({
  uri: "http://localhost:7000/graphql"
})

class App extends React.Component {
  
  render() { 
    return (  
      <ApolloProvider client={client}>
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Enquiry" component={Enquiry} />
        <Route path="/Login" component={Login} />
        <Route path="/LoginView" component={LoginView} />
        </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}
 
export default App;