import React, { Component } from 'react';

import { v4 as uuid } from "uuid";

import './Gallery.css';

function Gallery(props) {

    // Create new arrays to store figures
    let images = [];
    let videos = [];

    // Check that data exists (for images)
    if (props.images) {

        // Update array with html elements built out of props data and uuid keys,
        // using array.map to iterate over each item in the array and return a figure
        // with nested image and caption elements and their source and caption data
        images = props.images.map(img => (
            <figure key={uuid()}>
                <img src={img.src} alt={img.caption} />
                <figcaption>{img.caption}</figcaption>
            </figure>
        ))
    } else {

        // Write to console if there was no image data
        console.log('No images were passed down.')
    }
    
    // Check that data exists (for videos)
    if (props.videos) {

        // Update array with html elements built out of props data and uuid keys,
        // using array.map to iterate over each item in the array and return a figure
        // with nested iframe and caption elements and their source and caption data
        videos = props.videos.map(vid => (
            <figure key={uuid()}>
                <iframe width="240" height="160" src={vid.src}
                    title={vid.caption} frameBorder="0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                <figcaption>{vid.caption}</figcaption>
            </figure>
        ))
    } else {

        // Write to console if there was no video data
        console.log('No videos were passed down.')
    }

    return (
        <div className='galleryContainer'>
            <h2>Gallery</h2>
            <div className="photoContainer">
                {images}
                {videos}
            </div>
        </div>
    )
}

export default Gallery;