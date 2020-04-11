import React, { Component } from 'react';
import '../styles/App.css'
import {Link} from 'react-router-dom';

class Header extends Component {
    render() { 
        return (
        <div className="head">
        <div className="no titlediv">
        <h1 className="no titleName"><Link to = '/' className="a">Courseque Student Management</Link></h1>
        </div>
        </div>
          );
    }
}
 
export default Header;