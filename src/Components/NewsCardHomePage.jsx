import React, {useState} from 'react'

import './NewsCardHomePage-style.css'

import { Link, Route } from 'react-router-dom'

export default function NewsCardHomePage(props){

    const[imgSrc, setImgSrc] = useState(props.news.imgSrc)
    const[title, setTitle] = useState(props.news.title);
    const[description, setDescription] = useState(props.news.description)

    return(
        <div id = 'cardContainer'>
            <img id = "photoCard" src = {`${imgSrc}`}/>
            <div id = 'newsCardTitle'>{title}</div>
            <div id = 'newsCardDescription'>{description}</div>
            <Link to = {`/news${title}`}><button className = 'buttonMore' id = 'cardMore'><img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2Fshoot-iconGreen.svg?alt=media&token=93c6cce3-b43d-42ae-9404-8bb4e34a8336"/>Читать новость</button></Link>
        </div>
    )
}