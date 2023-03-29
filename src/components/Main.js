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

    componentDidMount() {
        try {
            const articles = articleData.filter(item => item.type == "article");
            const training = articleData.filter(item => item.type == "training");
            this.setState({ renderedArticles: articles.map(ar => <Article key={uuid()} data={ar} />)});
            this.setState({ renderedTraining: training.map(tr => <Article key={uuid()} data={tr} />)});
        } catch {
            console.log('Data was unable to be processed into article components. Check data repository.')
        }
    }

    render() {
        return (
            <div className={styles.container}>
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