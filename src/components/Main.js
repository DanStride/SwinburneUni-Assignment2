import React, { Component } from 'react';
import Article from './main/Article';
import Gallery from './main/Gallery';
import Sidebar from './main/Aside';
import Enquiry from './main/Enquiry';
import {articleData, matchesTable, injuriesTable, galleryImages, galleryVideos} from '../data/dummydata';

import styles from './Main.module.css';

function Main() {

    const articles = articleData.filter(item => item.type == "article");
    const training = articleData.filter(item => item.type == "training");
    
    const renderedArticles = articles.map(ar => <Article data={ar} />);
    const renderedTraining = training.map(tr => <Article data={tr} />);

    return (
        <div className={styles.container}>
            <div className={styles.mainBody}>
                {renderedArticles}
                <Gallery images={galleryImages} videos={galleryVideos} />
                {renderedTraining}
                <Enquiry />
            </div>
            <div className={styles.asideBody}>
                <Sidebar matchesData={matchesTable} injuriesData={injuriesTable} />
            </div>
        </div>
    )
}

export default Main;