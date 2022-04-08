import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import * as api from './api/api-articles'
import {Link} from 'react-router-dom'
import { MdHome } from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai"

const NavBar = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        api.getAllTopics().then((topics)=> {
            setTopics(topics)
            return topics
        })
    },[])

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userTime = new Date().toLocaleString("en-US", {timeZone: `${tz}`})
    const displayTime = [...userTime].slice(10, 15).join('') 
    const pmAm = [...userTime].slice(18, 22).join('')
    const usersTime = displayTime + pmAm

    return (
        // <nav className="navbar">
            <div className="navbar-links">
                 <Link to="/" id="header-home-link">
       <MdHome />
      </Link>
                {topics.map((topic) => {
                    return (<NavLink className="topic-names" key={topic.slug} style={{color: 'white'}} to={`/topics/${topic.slug}`}>{topic.slug}</NavLink>)
                })}
                    <span id="user-time"><AiOutlineClockCircle /> {usersTime} </span>
            </div>
      
        // </nav>
    )
}


export default NavBar;