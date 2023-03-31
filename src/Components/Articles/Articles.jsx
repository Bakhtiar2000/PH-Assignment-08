import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Sidebar from '../Sidebar/Sidebar';
import './Articles.css'

const Articles = () => {
    const [articles, setArticles]= useState([]);
    const [totalTime, setTotalTime]= useState(0);

    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setArticles(data))
    }, [])
    
    const increaseReadTime= article =>{
        console.log(article.read_time)
        let updatedTime= 0;
        updatedTime= totalTime + article.read_time;
        console.log(updatedTime)
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