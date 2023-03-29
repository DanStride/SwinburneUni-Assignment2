import React, { Component } from 'react';
import './Enquiry.css';
const sanitize = require("string-sanitizer");

class Enquiry extends Component {
    constructor(props) {
        super(props);
        this.state = { enquiry: "", email: "" };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(evt) {
        try {
            this.setState({ [evt.target.name]: evt.target.value });
        }
        catch {
            console.log('Something went wrong updating the state with user input.')
        }
    };

    submitForm(evt) {
        try {
            evt.preventDefault();
            if (sanitize.validate.isEmail(this.state.email)) {
                const newEnquiry = {
                    email: this.state.email,
                    enquiry: sanitize.sanitize(this.state.enquiry)
                }
                alert(`Form submitted with email: ${newEnquiry.email} and the enquiry: ${newEnquiry.enquiry}`)
                this.setState({ enquiry: "", email: "" });
            } else {
                alert('You must enter a correct email address!')
            }
        } catch {
            console.log('Something went wrong processing the enquiry.')
        }
    };

    render() {
        return (
            <div className='formContainer'>
                <form action="#" method="post" onSubmit={this.submitForm}>
                    <h2>Enquiry Form</h2>
                    <label htmlFor="email">Your Email:</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label htmlFor="enquiry">Your Enquiry:</label>
                    <textarea type="textarea" id="enquiry" name="enquiry" value={this.state.enquiry} onChange={this.handleChange} required />
                    <button className="formButton">Submit</button>
                </form>
            </div>
        );
    }
}

export default Enquiry;