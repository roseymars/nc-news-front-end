import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import * as api from './api/api-articles'

const NavBar = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        api.getAllTopics().then((topics)=> {
            setTopics(topics)
            return topics
        })
    },[])

    return (
        <nav className="navbar">
            <div className="navbar-links">
                {topics.map((topic) => {
                    return (<NavLink className="topic-names" key={topic.slug} to={`/topics/${topic.slug}`}>{topic.slug}</NavLink>)
                })}
            </div>
      
        </nav>
    )
}


export default NavBar;