import React, { Component } from 'react';
import Data from '../data.json'
import Header from './header';
import { Redirect, Link } from 'react-router-dom';


class Students extends Component {
    constructor(props){
        super(props)
        this.state = {    
            from: ''   
        }
        const token =localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
          loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }   


    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
          }
        return (
            <div>
                <Header />
                <div className="loginPage">
                <h1 className="h1studentinfo" >Student Information</h1>
                <div className="loginbox">
                    {Data.map((getDetails, index) => {  
            let path = this.props.location.pathname
            let id = path.slice(10)
             if(id === getDetails.id){
           return (
           <table className="table">
           <tr>
               <th>ID</th>
               <td> {getDetails.id} </td>
           </tr>
           <tr>
               <th>First Name</th>
               <td> {getDetails.fname} </td>
           </tr>
           <tr>
               <th>Last Name</th>
               <td> {getDetails.lname} </td>
           </tr>
           <tr>
               <th>DoB</th>
               <td> {getDetails.dob} </td>
           </tr>
           <tr>
               <th>Mobile No</th>
               <td> {getDetails.mobile} </td>
           </tr>
           <tr>
               <th>Address</th>
               <td> {getDetails.address} </td>
           </tr>
           <tr>
               <td colSpan="2" className="buttonSize"><Link to="/logout"><button>Logout</button></Link></td>
           </tr>
       </table>
           )}
       })}


                </div>
                </div>
            </div>
        );
    }
}

export default Students;