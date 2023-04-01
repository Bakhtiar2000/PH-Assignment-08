import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Article from '../Article/Article';
import Sidebar from '../Sidebar/Sidebar';
import './Articles.css'

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [bookMark, setBookMark] = useState([]);
    const [bookmarkCount, setBookmarkCount] = useState(0);
    const [toastCount, setToastCount] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    const increaseReadTime = article => {
        let updatedTime = 0;
        updatedTime = totalTime + article.read_time;
        setTotalTime(updatedTime)
    }

    const handleBookmark = article => {
        console.log(article)

        let updateBookmark = [];
        updateBookmark = [...bookMark, article.title]
        setBookMark(updateBookmark)

        setBookmarkCount(bookmarkCount + 1)

        setToastCount(prevCounts => {
            const newCounts = { ...prevCounts };
            newCounts[article.id] = (newCounts[article.id] || 0) + 1;
            return newCounts;
        });
        const clickCount = toastCount[article.id] || 0;

        if (clickCount >= 1) {
            console.log(clickCount)
            toast.warning('This article is already in the bookmark');
        }
    }

    return (
        <div className='articles-container'>
            <div>
                {
                    articles.map(article => <Article
                        article={article}
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
                    bookmarkCount={bookmarkCount}
                    toastCount={toastCount}
                ></Sidebar>
            </div>
            <ToastContainer />
        </div>
    );

};

export default Articles;