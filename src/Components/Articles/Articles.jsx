import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Sidebar from '../Sidebar/Sidebar';
import './Articles.css'

const Articles = () => {
    const [articles, setArticles]= useState([]);
    const [totalTime, setTotalTime]= useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setArticles(data))
    }, [])
    
    const increaseReadTime= article =>{
        console.log(article)
        let previousTime= 0;
        let updatedTime= previousTime + article.read_time;
        previousTime= updatedTime
        console.log(previousTime)
        setTotalTime(updatedTime)
    }

    return (
        <div className='articles-container'>
            <div>
            {
                articles.map(article=> <Article 
                    article= {article}
                    key={article.id}
                    increaseReadTime={increaseReadTime}
                ></Article>)
            } 
            </div>
            <div>
                <Sidebar totalTime={totalTime}></Sidebar>
            </div>
        </div>
    );

};

export default Articles;