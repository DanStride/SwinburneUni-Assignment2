import React, { Component } from 'react';

import { v4 as uuid } from "uuid";

import './Gallery.css';

function Gallery(props) {

    const images = props.images.map(img => (
        <figure key={uuid()}>
            <img src={img.src} alt={img.caption} />
            <figcaption>{img.caption}</figcaption>
        </figure>
    ))

    const videos = props.videos.map(vid => (
        <figure key={uuid()}>
            <iframe width="240" height="160" src={vid.src}
                title={vid.caption} frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            <figcaption>{vid.caption}</figcaption>
        </figure>
    ))

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