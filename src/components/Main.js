import React, { Component } from 'react';
import Article from './main/Article';
import Gallery from './main/Gallery';
import Sidebar from './main/Aside';
import Enquiry from './main/Enquiry';
import { articleData, matchesTable, injuriesTable, galleryImages, galleryVideos } from '../data/dummydata';

import { v4 as uuid } from "uuid";

import styles from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const articles = articleData.filter(item => item.type == "article");
        const training = articleData.filter(item => item.type == "training");

        const renderedArticles = articles.map(ar => <Article key={uuid()} data={ar} />);
        const renderedTraining = training.map(tr => <Article key={uuid()} data={tr} />);

        return (
            <div className={styles.container}>
                <div className={styles.mainBody}>
                    {renderedArticles}
                    <Gallery images={galleryImages} videos={galleryVideos} />
                    {renderedTraining}
                    <Enquiry />
                </div>
                {(this.props.asideOpen) &&
                    <div className={styles.asideBody}>
                        <Sidebar matchesData={matchesTable} injuriesData={injuriesTable} />
                    </div>
            }

            </div>
        )
    }
}

export default Main;