import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import './Articles.css'
const Articles = () => {
    const [articles, setArticles]= useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setArticles(data))
    }, [])

    return (
        <div>
            <h2>Hello from {articles.length} articles</h2>
            {
                articles.map(article=> <Article 
                    article= {article}
                    key={article.id}
                ></Article>)
            } 
        </div>
    );

};

export default Articles;