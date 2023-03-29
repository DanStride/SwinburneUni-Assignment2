import React, { Component } from 'react';
import EnhancedComponent from '../upvote/upvote';
import './Article.css';

export class Article extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='articleContainer'>
                <h2>{this.props.data.heading}</h2>
                <article>
                    {this.props.data.body}
                </article>
                <div className='upvoteContainer'>
                    <i class="fa-regular fa-thumbs-up fa-lg articleUpvote" onClick={this.props.addUpvote}></i>
                    <span>{this.props.upvotes}</span>
                </div>
            </div>
        )
    }
}

export default EnhancedComponent(Article);