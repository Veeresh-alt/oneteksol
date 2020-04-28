import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Header from './header';
import {getEnquiryQuery} from './queries/queries'
import { graphql } from 'react-apollo';


class LoginView extends Component {
    constructor(props){
        super(props)
        // this.state = {
               
        // }
        let loggetOUt = false
        const token =localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn,
            loggetOUt,
        }
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogout(e){
        localStorage.removeItem("token");
        this.setState({
            loggetOUt:true
        })
    }
    displayEnquiries(){
        let data = this.props.getEnquiryQuery;
        if(data.loading){
            return(<h3>Loading queries</h3>)
        }else{
            return(
                <table className="b">
                <tr className="b">
                <th>S.No</th>
                <th>Name:</th>
                <th>Mobile No:</th>
                <th>Mail id:</th>
                <th>Course:</th>
                <th>Comments:</th>
                </tr> 
                {data.enquiries.map(list=>{
            return(
                <tr className="b">
                  <td>{list.id}</td>
                  <td>{list.name}</td>
                  <td>{list.contact}</td>
                  <td>{list.email}</td>
                  <td>{list.course}</td>
                  <td>{list.comments}</td>
                </tr>   
                )
              })}
              <td colSpan="6" style={{textAlign:"center"}}>
                  <button className="btn btn-danger" style={{marginTop:"10px"}} onClick={this.handleLogout}>
                      Logout</button></td>
              </table>
            )
          }
          }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to ="/" />  }
           else if(this.state.loggetOUt === true){
                return <Redirect to ="/login" />  }
        return (
            <div>
                <Header />
                <div className="bodyview">
                <div className="tablestyle">
                    {this.displayEnquiries()}
                </div>
                </div>
            </div>
        );
    }
};

export default (graphql(getEnquiryQuery, {name:"getEnquiryQuery"}))(LoginView);