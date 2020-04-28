import React from 'react';
import Header from './header';
import {graphql} from 'react-apollo';
import {compose} from 'recompose';
import {addEnquiryMutation,getCoursesQuery} from './queries/queries'
import { Redirect } from 'react-router-dom';
import nodemailer from 'nodemailer';

class Enquiry extends React.Component {
    constructor(props){
        super(props)
        let reload = false
        let transporter = nodemailer.createTransport({
            host: "mail.oneteksol.com",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: 'veereshkali@oneteksol.com',
                pass: 'Kveeresh@4'
              }
            });
            let mailOptions = {
                from: 'veereshkali@oneteksol.com',
                to: 'veereshkali@oneteksol.com',
                subject: 'Sending Email using Node.js',
                html: '<h1>Kali Veeresh</h1>'
              };

        this.state = { 
            name:'',
            contact:'',
            email:'',
            course:'',
            comments:'',
            reload,
            transporter,
            mailOptions
         }
    }
    
    submitForm(e){
        e.preventDefault()
        this.setState({
            reload:true,
        });
        this.state.transporter.sendMail(this.state.mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        this.props.addEnquiryMutation({
            variables: {
            name: this.state.name,
            contact:this.state.contact,
            email:this.state.email,
            course:this.state.course,
            comments:this.state.comments,
            },
        });
        alert("succesfully submited!");
    }
    displayCourses(){
        var data = this.props.getCoursesQuery;
        if(data.loading){
            return( <option disabled>Loading courses</option> );
        }else{
            return data.courses.map((course)=>{
            return( <option key={ course.id } value={course.name}>{ course.name }</option> );
            })
        }
    }
    
    render() { 
        if (this.state.reload === true){
            return <Redirect to="/Enquiry" />}
        return (<div>
            <Header />
            <div className="bodyview">
                <div className="mainEn">
                <div className="enquiryform">
                    <h2 style={{textAlign:"center"}}>Enquiry Form</h2>
                <form onSubmit={ this.submitForm.bind(this) }>
					<lable>Name:</lable>
                    <input className="form-control b" type="text" name="name" 
                    onChange={ (e) => this.setState({ name: e.target.value }) } 
                    placeholder="Enter full name" />
					<lable>Mobile Number:</lable>
                    <input className="form-control b" type="text" name="contact" 
                    onChange={ (e) => this.setState({ contact: e.target.value }) } 
                    placeholder="Enter mobile number" />
					<lable>Email:</lable>
                    <input className="form-control b" type="text" name="email" 
                    onChange={ (e) => this.setState({ email: e.target.value }) } 
                    placeholder="Enter mail id" />
                    <lable>Course:</lable>
                    <select className="form-control b" name="course" 
                    onChange={ (e) => this.setState({ course: e.target.value }) } >
                        <option>select course</option>
                        {this.displayCourses()}
                    </select>
					<lable>comments:</lable>
                    <textarea className="form-control b" name="comments" 
                    onChange={ (e) => this.setState({ comments: e.target.value }) } 
                    placeholder="Enter Comments..." />
                    <br />
					<button className="contact100-form-btn" style={{margin:"0 auto"}}>
						<span>
							Submit
							<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
						</span>
					</button>
			    </form>
                </div>
                </div>
            </div>
        </div>);
    }
}
 
export default compose(
    graphql(addEnquiryMutation, {name: "addEnquiryMutation"}),
    graphql(getCoursesQuery, {name: "getCoursesQuery"})
)(Enquiry);