import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Sidebar from '../Sidebar/Sidebar';
import './Articles.css'

const Articles = () => {
    const [articles, setArticles]= useState([]);
    const [totalTime, setTotalTime]= useState(0);
    const [bookMark, setBookMark]= useState([]);
    const [count, setCount]= useState(0);

    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setArticles(data))
    }, [])
    
    const increaseReadTime= article =>{
        let updatedTime= 0;
        updatedTime= totalTime + article.read_time;
        setTotalTime(updatedTime)
    }

    const handleBookmark = article=>{
        console.log(article)
        let updateBookmark=[];
        let bookmarkCount= 0;
        updateBookmark= [...bookMark , article.title]
        bookmarkCount= count + 1;
        setBookMark(updateBookmark)
        setCount(bookmarkCount)
    }

    return (
        <div className='articles-container'>
            <div>
            {
                articles.map(article=> <Article 
                    article= {article}
                    key={article.id}
                    increaseReadTime={increaseReadTime}
                    handleBookmark={handleBookmark}
                ></Article>)
            } 
            </div>
            <div>
                <Sidebar 
                totalTime={totalTime}
                bookMark={bookMark}
                count={count}
                ></Sidebar>
            </div>
        </div>
    );

};

export default Articles;