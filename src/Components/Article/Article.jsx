import React from 'react';
import './Article.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Article = (props) => {
    console.log(props.article)
    const {cover_image, author_image, read_time, author, title, published_date}= props.article;
    return (
        <div className='article-container'>
            <img src={cover_image} alt="" />
            <div className='profile-container'>
                <div className='profile'>
                    <img src={author_image} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <h6>{published_date}</h6>
                    </div>
                </div>
                <p>
                    {read_time} min read  <FontAwesomeIcon icon={faBookmark} />
                </p>
            </div>

            <h2>{title}</h2>
            <p>#beginners #programming</p>
            <a href="/read">Mark as read</a>
        </div>
    );

};

export default Article;