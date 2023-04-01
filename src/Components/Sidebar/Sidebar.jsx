import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    console.log(props)
   
    return (
        <div className='sidebar'>
            <div className='spent-time'>
                <h4>Spent time on read: {props.totalTime}min </h4>
            </div>
            <div className='bookmark-container'>
                <h2>Bookmarked Blogs: {props.bookmarkCount}</h2>
                <div className='bookmark-list'>
                    <p>{props.bookMark[0]}</p>
                    <p>{props.bookMark[1]}</p>
                    <p>{props.bookMark[2]}</p>
                    <p>{props.bookMark[3]}</p>
                    <p>{props.bookMark[4]}</p>
                    <p>{props.bookMark[5]}</p>
                </div>


            </div>
        </div>
    );
};

export default Sidebar;