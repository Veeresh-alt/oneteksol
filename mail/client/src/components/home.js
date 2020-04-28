import React, { Component } from 'react';
import Header from './header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { to:'',feedback: '', name: 'CourseQue', email: 'veereshkali@oneteksol.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    render() {
        return (
            <div>
                <Header />
                <div className="bodyview">
                <h1>Home Page...</h1>
                <form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
            <input type="email" 
            name="to"
            onChange={this.handleChange}
          className="form-control"
          placeholder="mail id"
          style={{width: '20%'}}
        	required
        	value={this.state.to} />
      	<textarea
        	id="test-mailing"
          name="feedback"
          className="form-control"
        	onChange={this.handleChange}
        	placeholder="mail text here..."
        	required
          value={this.state.feedback}
          style={{width: '30%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Send" className="btn btn-danger" onClick={this.handleSubmit} />
  	</form>
                </div>
            </div>
        );
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit() {
        const templateId = 'template_0n91JomA';

        this.sendFeedback(templateId, {to_html:this.state.to,message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'smtp_server', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
}

export default Home;