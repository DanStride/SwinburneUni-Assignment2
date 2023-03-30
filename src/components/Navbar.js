import React, { Component } from 'react';

import styles from './Navbar.module.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img className={styles.headingLogo} src="https://content.foxsports.com.au/ott/afl/2017/teams/752/20010_752_home.png" />
                    <h1 className={styles.bannerHeading}>Melbourne Football Club</h1>
                </div>
                <nav className={styles.navBar}>
                    <button className={styles.navButton}><a href="#news">News</a></button>
                    <button className={styles.navButton}><a href="#photo-gallery">Gallery</a></button>
                    <button className={styles.navButton}><a href="#enquiry-form">Enquiry</a></button>
                    <button className={styles.navButton}><a href="#training-and-travel">Training</a></button>
                    
                    // This event handler on this button calls a method on the parent component
                    <button className={styles.drawerButton} onClick={this.props.toggleAside}><i className="fa-solid fa-bars"></i></button>
                </nav>
            </div>
        )
    }
}

export default Navbar;