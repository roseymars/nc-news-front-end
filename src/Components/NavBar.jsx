import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Link, NavLink} from "react-router-dom"
import * as api from './api/api-articles'

const NavBar = () => {
    const [topics, setTopics] = useState([])

// sticky navbar:
//   const [stickyClass, setStickyClass] = useState('relative');

//   useEffect(() => {
//     window.addEventListener('scroll', stickNavbar);

//     return () => {
//       window.removeEventListener('scroll', stickNavbar);
//     };
//   }, []);

//   const stickNavbar = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
//     }
//   };

    useEffect(() => {
        api.getAllTopics().then((topics)=> {
            setTopics(topics)
            return topics
        })
    },[])

    return (
        <nav className="navbar">
    {/* //  <nav className={`navbar h-16 w-full bg-gray-200 ${stickyClass}`}> */}
            <div className="navbar-links">
                {/* <NavLink className="nav-link-home" to="/">Home</NavLink> */}
                {topics.map((topic) => {
                    return (<NavLink className="topic-names" key={topic.slug} to={`/topics/${topic.slug}`}>{topic.slug}</NavLink>)
                })}
            </div>
      
        </nav>
    )
}


export default NavBar;