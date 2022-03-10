import React, {useState, useEffect} from 'react'
import * as api from './api/api-articles'
import {useParams} from 'react-router-dom'

// this page will load when user clicks on an article header 
// this Article will render all details in ArticleCard with comments & votes also

const Article = () => {
    const [articleById, setArticleById] = useState([])
    const { article_id } = useParams()
    // isLoading
    useEffect(() => {
        if (article_id != undefined)
        api.getArticleById(article_id).then((articleById)=> {
            console.log(articleById, 'above set')
            setArticleById(articleById)
            console.log(articleById, 'below set')
            return articleById
        })
    },[])

    return (
        <div className="single-article">
            <h3> {article_id} </h3>
            {/* <h3> {author} </h3> */}

      
    </div>
    )}

export default Article;