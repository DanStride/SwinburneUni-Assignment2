import React, { Component } from 'react';
import Article from './main/Article';
import Gallery from './main/Gallery';
import Sidebar from './main/Aside';
import Enquiry from './main/Enquiry';

import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.mainBody}>
                <Article />
                <Gallery />
                <Article />
                <Enquiry />
            </div>
            <div className={styles.asideBody}>
                <Sidebar />
            </div>
        </div>
    )
}

export default Main;