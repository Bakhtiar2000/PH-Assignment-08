import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='spent-time'>
                <h4>Spent time on read:{} </h4>
            </div>
            <div className='bookmarked'>
                <h2>Bookmarked Blogs:{}</h2>


            </div>
        </div>
    );
};

export default Sidebar;