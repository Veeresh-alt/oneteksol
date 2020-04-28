import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

    render() {
        return (
            <div>
               <div className="col-md-12 header">
                   <div className="col-md-6 titlediv titledivstyle no"><h1>CourseQue</h1></div>
                   <div className="col-md-6 titlediv navDiv">
                       <div className="col-md-12 navButtons">
                       <Link to="/" className="buttonmar" ><button className="btn btn-info">Home</button></Link>
                       <Link to="/Enquiry" className="buttonmar"><button className="btn btn-info">Enquiry</button></Link>
                       <Link to="/Login" className="buttonmar"><button className="btn btn-info">Login</button></Link>
                       <Link to="/" className="buttonmar"><button className="btn btn-info">About us</button></Link>
                       <input type="text" placeholder="Search.." name="search"></input>
                       <button type="submit"><i className="fa fa-search"></i></button>
                       </div>
                   </div>
                </div> 
            </div>
        );
    }
}

export default Header;