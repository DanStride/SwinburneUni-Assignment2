import React, { Component } from 'react';
import Article from './main/Article';
import Gallery from './main/Gallery';
import Aside from './main/Aside';
import Enquiry from './main/Enquiry';
import { articleData, matchesTable, injuriesTable, galleryImages, galleryVideos } from '../data/dummydata';

import { v4 as uuid } from "uuid";

import styles from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedArticles: [],
            renderedTraining: []
        }
    }

    // Data processing is performed on mount to avoid recurring processing on each re-render
    componentDidMount() {
        try {
            // dummydata.js is used to simulate incoming data from a database.
            // Data is filtered into new variables depending on the value of its "type"
            const articles = articleData.filter(item => item.type === "article");
            const training = articleData.filter(item => item.type === "training");

            // State is updated with arrays of Article and Training components built from the previously filtered data
            // and a unique key attribute from the uuid library.
            // After setting state, an anonymous callback runs, to log to the console that the data was loaded.
            this.setState({ renderedArticles: articles.map(ar => <Article key={uuid()} data={ar} />)}, () => console.log('Loaded articles'));
            this.setState({ renderedTraining: training.map(tr => <Article key={uuid()} data={tr} />)}, () => console.log('Loaded training'));
        } catch {
            // If the process fails for some reason, an informative message is logged to the console
            console.log('Data was unable to be processed into article components. Check data repository.')
        }
    }

    render() {
        return (
            <div className={styles.container} id='mainDiv'>
                <div className={styles.mainBody}>
                    {this.state.renderedArticles}
                    <Gallery images={galleryImages} videos={galleryVideos} />
                    {this.state.renderedTraining}
                    <Enquiry />
                </div>
                {(this.props.asideOpen) &&
                    <div className={styles.asideBody}>
                        <Aside matchesData={matchesTable} injuriesData={injuriesTable} />
                    </div>
                }
            </div>
        )
    }
}

export default Main;