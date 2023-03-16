import React, { Component } from 'react';

import './Gallery.css';

function Gallery() {
    return (
        <div className='galleryContainer'>
            <h2>Gallery</h2>
            <div class="photoContainer">
                    <figure>
                        <img src="https://resources.afl.com.au/photo-resources/2023/02/27/3ac3afae-b789-450e-a79a-47f932facb0b/uvTM6s7v.jpg?width=240"
                            alt=""/>
                        <figcaption>Time for Celebration</figcaption>
                    </figure>
                    <figure>
                        <img src="https://resources.afl.com.au/photo-resources/2023/02/27/04751b0e-0ec4-4db7-9baf-cb1406a387b9/FpjpqT49.jpg?width=240"
                            alt=""/>
                        <figcaption>The mighty moustache</figcaption>
                    </figure>
                    <figure>
                        <img src="https://resources.afl.com.au/photo-resources/2023/02/27/97e2ff58-d08a-4e7a-b4ad-397fd30bef86/AhWgjflk.jpg?width=240"
                            alt=""/>
                        <figcaption>Kickin back</figcaption>
                    </figure>
                    <figure>
                        <img src="https://resources.afl.com.au/photo-resources/2023/02/27/cbab33d4-70bd-4666-98f9-bef8fbddf28b/wqX8VX6F.jpg?width=240"
                            alt=""/>
                        <figcaption>Proud as punch</figcaption>
                    </figure>
                    <figure>
                        <img src="https://resources.afl.com.au/photo-resources/2023/02/27/3ac3afae-b789-450e-a79a-47f932facb0b/uvTM6s7v.jpg?width=240"
                            alt=""/>
                        <figcaption>Buddies on the field</figcaption>
                    </figure>
                    <figure>
                        <iframe width="240" height="160" src="https://www.youtube.com/embed/JL6SEzObn90"
                            title="YouTube video of Melbourne playing a great game" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        <figcaption>Mighty Dees at it again</figcaption>
                    </figure>
                </div>
        </div>
    )
}

export default Gallery;