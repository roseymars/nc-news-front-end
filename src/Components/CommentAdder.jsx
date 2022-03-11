import React, { useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import * as api from "./api/api-articles";
import UserContext from "./UserContext"

const CommentAdder = () => {
    const [postComment, setPostComment] = useState([])

    return (
        <>
        return user comment at top of list straight away, then bottom of comment list
        </>
    )
}

export default CommentAdder;