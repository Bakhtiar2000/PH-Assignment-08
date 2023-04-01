import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    console.log(props)

    // const para = [];
    // for (let i = 0; i < props.bookMark.length; i++) {
    //     para.push(React.createElement('p', { key: i }, `Paragraph ${i + 1}`));
    // }


    // const Para = p => React.createElement('p', { className: "bookmark-title" }, `${props.bookMark}`)

    return (
        <div className='sidebar'>
            <div className='spent-time'>
                <h4>Spent time on read: {props.totalTime}min </h4>
            </div>
            <div className='bookmark-container'>
                <h2>Bookmarked Blogs: {props.bookmarkCount}</h2>
                <div className='bookmark-list'>
                    {
                        props.bookMark.map(title => <p> {title} </p>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Sidebar;