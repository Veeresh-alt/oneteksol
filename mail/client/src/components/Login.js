import React, { Component } from 'react';
import {getUsersQuery} from './queries/queries';
import {Redirect} from 'react-router-dom';
import Header from './header';
import { graphql } from 'react-apollo';

class Login extends Component {
    constructor(props){
        super(props)
        let adminIn = false
        let studentIn = false
        this.state = {
            username: '',
            password: '',
            studentID:'',
            error:'',
            adminIn,
            studentIn
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      };

      handleSubmit(e){
        e.preventDefault()
        const { username, password } = this.state
        let data = this.props.getUsersQuery;
          data.users.map((user)=> {
            if (username === user.username && password === user.password && "admin" === user.role){
                localStorage.setItem("token", "fkdajfkldsjlkjsadjfdjfa;sldfjk")
                this.setState({
                  adminIn:true,
                })}
                else if (username === user.username && password === user.password && "student" === user.role){
                  localStorage.setItem("token", "fkdajfkldsjlkjsadjfdjfa;sldfjk")
                  this.setState({
                    studentIn:true,
                    studentID: user.id
                  })
                }
                })
                };
  
      render() {
        if (this.state.adminIn){
            return <Redirect to="/LoginView" />}
            else if (this.state.studentIn){
              return <Redirect to={`/students/${this.state.studentID}`} />
            } 
        return (
            <div>
           <Header />
           <div className="bodyview">
           <div className="mainEn">
                <div className="enquiryform">
                    <h2 style={{textAlign:"center"}}>Login</h2>
                <form onSubmit={this.handleSubmit}>
					<lable>Username:</lable>
                    <input className="form-control b" 
                    type="text" name="username"
                    value={this.state.username} 
                    placeholder="Enter username" 
                    onChange={this.handleChange} />
					<lable>Password:</lable>
                    <input className="form-control b" 
                    type="password" name="password" 
                    placeholder="Enter Password" 
                    value={this.state.password}
                    onChange={this.handleChange} />
                    <br />
					<button className="contact100-form-btn" type="submit" style={{margin:"0 auto"}}>
							Login
					</button>
			    </form>
                </div>
                </div>
           </div>
            </div>
        );
    }
}

export default graphql(getUsersQuery, {name:"getUsersQuery"})(Login);