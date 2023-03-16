import React, { Component } from 'react';
import Article from './main/Article';
import Gallery from './main/Gallery';
import Sidebar from './main/Sidebar';

import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.container}>
            <h1>Main</h1>
            <div>
                <Article />
                <Gallery />
                <Article />
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Main;