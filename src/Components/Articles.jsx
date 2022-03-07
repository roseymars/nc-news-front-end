import {React, useState} from 'react'
import ArticleItem from './ArticleItem'

const Articles = () => {
    const [articles, setArticles] = useState([])
    return (
        <ArticleItem/>
    )
}

export default Articles;