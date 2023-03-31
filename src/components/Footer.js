import React, { Component } from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <footer>
            <span>Copyright © 2023 Daniel Stride</span>
            <button className="footer-button" id="privacy-policy-button" onClick={props.togglePrivacy} >Privay Policy</button>
            <button className="footer-button" onClick={props.togglePrivacy}>Terms and Conditions</button>
        </footer>
    )
}

export default Footer;