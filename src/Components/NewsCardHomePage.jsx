import React, {useState} from 'react'

import './NewsCardHomePage-style.css'

export default function NewsCardHomePage(props){

    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);

    const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/newsImg%2Fbell.png?alt=media&token=8d0904eb-4c8c-4803-a8b7-fd5fa8cfc1b9'

    return(
        <div id = 'cardContainer'>
            <img id = "photoCard" src = {`${imgSrc}`}/>
            <div id = 'newsCardTitle'><b>{title}</b></div>
            <div id = 'newsCardDescription'>{text}</div>
        </div>
    )
}