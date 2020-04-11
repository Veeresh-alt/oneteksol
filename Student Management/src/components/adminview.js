import React, { Component } from 'react';
import Header from './header'
import {Link, Redirect} from 'react-router-dom';
import Data from '../data.json'

class Adminview extends Component {
    constructor(props){
        super(props)
        this.state = {
               
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
            return <Redirect to ="/" />
        }
        return (
            <div>
            <Header />
            <div className="loginPage">           
               <div className="studentsList">
                                <h1 className="h1center">Students List</h1>
                                <table className="table">
                                <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>DOB</th>
                                <th>Mobile No</th>
                                <th>Address</th>
                                </tr>
                      {Data.map((getDetails, i)=>{
                          return <tr>
                                <td>{getDetails.id}</td>
<Link to = {`/students/${getDetails.id}`} className="Link"><td style={{border:'none'}}>{getDetails.fname}</td></Link>
                                <td>{getDetails.lname}</td>
                                <td>{getDetails.dob}</td>
                                <td>{getDetails.mobile}</td>
                                <td>{getDetails.address}</td>
                              </tr>
                      })}     
                             <tr>
                          <td colSpan="3" className="buttonleft"><Link to="/adminview"><button>Print</button></Link></td>
                          <td colSpan="3" ><Link to="/logout"><button>Logout</button></Link></td>
                             </tr> 
                   </table>
               </div>
            </div>
            </div>
        );
    }
}

export default Adminview;