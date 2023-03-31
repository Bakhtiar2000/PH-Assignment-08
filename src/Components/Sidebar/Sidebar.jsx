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
                <h2>Bookmarked Blogs: {props.count}</h2>
                <div className='bookmark-list'>

                </div>


            </div>
        </div>
    );
};

export default Sidebar;