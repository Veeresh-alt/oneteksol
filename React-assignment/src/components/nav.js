import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    
    render() { 
        return (
         <div className="b no navBar">
            <div className="no navMenu"><Link to="/"><button className="navButtons a">Home</button></Link></div>
            <div className="no navMenu"><Link to="/components/login"><button className="navButtons a">Log in</button></Link></div>
            <div className="no navMenu"><Link to="/components/application"><button className="navButtons a">Application Form</button></Link></div>
            <div className="no navMenu"><Link to="/components/contact"><button className="navButtons a">Contact us...</button></Link></div>
 
        </div> );
    }
}
 
export default Navbar;