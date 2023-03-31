import React, { Component } from 'react';
import EnhancedComponent from '../upvote/upvote';
import './Article.css';

export class Article extends Component {

    // Article class uses data passed into its props to populate heading and article tags
    // The upvote count and add-method props are added via the EnhancedComponent wrapping the class
    render() {
        return (
            <div className='articleContainer'>
                <h2>{this.props.data.heading}</h2>
                <article>
                    {this.props.data.body}
                </article>
                <div className='upvoteContainer'>
                    <i className="fa-regular fa-thumbs-up fa-lg articleUpvote" onClick={this.props.addUpvote}></i>
                    <span>{this.props.upvotes}</span>
                </div>
            </div>
        )
    }
}

export default EnhancedComponent(Article);