import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header';  
import { Redirect } from 'react-router-dom';
import * as Yup from "yup";
import Data from '../data.json';


  
class Login extends Component {
  constructor(props){
    super(props)
    let adminIn = false
    let studentIn = false
    this.state = {
      role: 'admin',
      username: '',
      password: '',
      studentID: {},
      error:'',
      adminIn,
      studentIn,
          }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleValidation(){
    let username = this.state
    let error = {};
    let formIsValid = true;

    if(!username){
      formIsValid = false;
      error.username = "Cannot be empty";
   }
  }

  handleSubmit(e){
    e.preventDefault()
    {Data.map((getDetails, index) => {
      const { username, password } = this.state
      if (username === getDetails.username && password === getDetails.password && "admin" === getDetails.role){
        localStorage.setItem("token", "fkdajfkldsjlkjsadjfdjfa;sldfjk")
        this.setState({
          adminIn:true
        })}
        else if (username === getDetails.username && password === getDetails.password && "student" === getDetails.role){
          localStorage.setItem("token", "fkdajfkldsjlkjsadjfdjfa;sldfjk")
          this.setState({
            studentIn:true,
            studentID: getDetails.id
          })

        }
    })}
  };
   
  render() {

    if (this.state.adminIn){
      return <Redirect to="/adminview" />}
      else if (this.state.studentIn){
        return <Redirect to={`/students/${this.state.studentID}`} />
      } 
    return (<div>
      <Header />
      <div className="loginPage">
      <div className="loginbox">
      <form onSubmit={this.handleSubmit}>
        <label>User</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />       
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>  
      </div>
      </div>
      </div>
    );
  }
}

export default Login;