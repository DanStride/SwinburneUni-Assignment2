import React, { Component } from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <span>Copyright © 2023 Daniel Stride</span>
            <span className="footer-button" id="privacy-policy-button">Privay Policy</span>
            <span>Terms and Conditions</span>
        </footer>
    )
}

export default Footer;