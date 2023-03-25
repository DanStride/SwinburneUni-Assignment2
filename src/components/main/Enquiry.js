import React, { Component } from 'react';
import './Enquiry.css';

class Enquiry extends Component {
    constructor(props) {
        super(props);
        this.state = { enquiry: "", email: "" };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    submitForm(evt) {
        evt.preventDefault();
        alert(`Form submitted with email: ${this.state.email} and the enquiry: ${this.state.enquiry}`);
        this.setState({ enquiry: "", email: "" });
    };

    render() {
        return (
            <div className='formContainer'>
                <form action="#" method="post" onSubmit={this.submitForm}>
                    <h2>Enquiry Form</h2>
                    <label htmlFor="email">Your Email:</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label htmlFor="enquiry">Your Enquiry:</label>
                    <input type="text" id="enquiry" name="enquiry" value={this.state.enquiry} onChange={this.handleChange} required />
                    <button className="formButton">Submit</button>
                </form>
            </div>
        );
    }
}

export default Enquiry;