import React, { Component } from 'react';
import Header from './header'

class Home extends Component {
    render() {
        return (
            <div>
            <div>
      <Header />
      <div className="addbookdiv">
        <h1 style={{textAlign:"center"}} >Wel Come</h1>
      </div>
    </div>      
            </div>
        );
    }
}

export default Home;    