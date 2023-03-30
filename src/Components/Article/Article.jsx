import React from 'react';
import './Article.css'
const Article = (props) => {
    console.log(props.article)
    const {cover_image, author_image, read_time, author, title, published_date}= props.article;
    return (
        <div>
            <img src={cover_image} alt="" />
        </div>
    );

};

export default Article;