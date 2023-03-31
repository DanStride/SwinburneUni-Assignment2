import React, { useState, useEffect, Component } from 'react';

import { v4 as uuid } from "uuid";

import './Gallery.css';

function Gallery(props) {

    // Use hooks to manage state of images and videos
    let [images, setImages] = useState();
    let [videos, setVideos] = useState();

    // useEffect hook is implemented to control infinite loop re-rendering issue,
    // the empty array passed as a second argument will cause useEffect to run only on first render
    useEffect(() => {

        // Check that data exists (for images)
        if (props.images) {

            // Set state with html elements built out of props data and uuid keys,
            // using array.map to iterate over each item in the array and return a figure
            // with nested image and caption elements and their source and caption data
            setImages(props.images.map(img => (
                <figure key={uuid()}>
                    <img src={img.src} alt={img.caption} />
                    <figcaption>{img.caption}</figcaption>
                </figure>
            )))
        } else {

            // Write to console if there was no image data
            console.log('No images were passed down.')
        }

        // Check that data exists (for videos)
        if (props.videos) {

            // Set state with html elements built out of props data and uuid keys,
            // using array.map to iterate over each item in the array and return a figure
            // with nested iframe and caption elements and their source and caption data
            setVideos(props.videos.map(vid => (
                <figure key={uuid()}>
                    <iframe width="240" height="160" src={vid.src}
                        title={vid.caption} frameBorder="0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                    <figcaption>{vid.caption}</figcaption>
                </figure>
            )))
        } else {

            // Write to console if there was no video data
            console.log('No videos were passed down.')
        }
        // Dependency array to control execution only on first render
    }, []);


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