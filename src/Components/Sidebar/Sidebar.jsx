import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    // console.log(props)
    return (
        <div className='sidebar'>
            <div className='spent-time'>
                <h4>Spent time on read: {props.totalTime}min </h4>
            </div>
            <div className='bookmarked'>
                <h2>Bookmarked Blogs:{}</h2>
                <p>Conversational AI: a threat or blessing?
                </p>
                <p>Conversational AI: a threat or blessing?
                </p>


            </div>
        </div>
    );
};

export default Sidebar;