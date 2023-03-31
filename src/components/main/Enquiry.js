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

    // This is called every time a change is made on either of the input fields
    handleChange(evt) {
        try {
            // State is set using the event info to determine the corresponding field/name
            // and the value of the corresponding field/name
            this.setState({ [evt.target.name]: evt.target.value });
        }
        catch {
            // If something goes wrong, write to the console:
            console.log('Something went wrong updating the state with user input.')
        }
    };

    submitForm(evt) {
        try {
            // Prevent the usual form submit action
            evt.preventDefault();

            // Using the string-sanitizer library, check that the email is correct format
            if (sanitize.validate.isEmail(this.state.email)) {

                // Create a new enquiry object
                // This object can sent to a server and stored in a database
                const newEnquiry = {
                    email: this.state.email,

                    // Using the string-sanitizer library, remove all characters that aren't letters or numbers
                    // from the enquiry
                    enquiry: sanitize.sanitize(this.state.enquiry)
                }

                // To simulate posting the enquiry object, 
                // the browser will alert the user of the data which would be sent
                alert(`Form submitted with email: ${newEnquiry.email} and the enquiry: ${newEnquiry.enquiry}`)

                // Reset the form
                this.setState({ enquiry: "", email: "" });
            } else {

                // The email was incorrect format, an alert shows to inform user
                alert('You must enter a correct email address!')
            }
        } catch {

            // Log to the console if something went wrong
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