import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Sidebar from '../Sidebar/Sidebar';
import './Articles.css'
const Articles = () => {
    const [articles, setArticles]= useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setArticles(data))
    }, [])

    return (
        <div className='articles-container'>
            <div>
            {
                articles.map(article=> <Article 
                    article= {article}
                    key={article.id}
                ></Article>)
            } 
            </div>
            <div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );

};

export default Articles;