import React, { Component } from 'react';
import './Enquiry.css';

function Enquiry() {
    return (
        <div className='formContainer'>
            <form action="#" method="post">
                    <h2>Enquiry Form</h2>
                    <label for="email">Your Email:</label>
                    <input type="text" id="email" name="email" required/>
                    <label for="enquiry">Your Enquiry:</label>
                    <input type="text" id="enquiry" name="enquiry" required/>
                    <button class="formButton">Submit</button>
                </form>
        </div>
    )
}

export default Enquiry;