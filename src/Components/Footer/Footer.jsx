import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h3>1. What are the differences between props and state?</h3>
            <ul>
                <li>States are managed within a component and can be accessed and modified within that component and its child. On the other hand, Props are passed to a component from its parent and cannot be modified within the component</li>
                <li>State is mutable, its value can be changed. But Props are immutable, its value cannot be changed</li>
                <li>State is set by parent component, whereas Props are set by event handlers</li>
            </ul>

            <h3>2. How does useState work?</h3>
            <p>= When we use useState, it returns an array with two values: the current state and a function that we can use to update the state. The initial state is rendered on the first state</p>

            <h3>3. What can useEffect be used for except loading data?</h3>
            <p>= useEffect can be used for different purposes like updating document title, add or remove event listeners, trigger animations, setting up timers etc</p>

            <h3>4. How does react work?</h3>
            <p>= React is a JavaScript library that is used to build user interfaces for web applications. It works by creating a virtual representation of the UI and updating it based on changes in the application state.</p>
        </div>
    );
};

export default Footer;