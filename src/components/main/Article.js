import React, { Component } from 'react';
import './Article.css';

function Article(props) {
    console.log(props)
    return (
        <div className='articleContainer'>
            <h2>{props.data.heading}</h2>
            <article>
                {props.data.body}
            </article>
        </div>
    )
}

export default Article;