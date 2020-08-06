import React, {useState} from 'react'

import './DefaultPageTitle-style.css'


export default function DefaultPageTitle(props){
    
    const[boldPart, setBoldPart] = useState(props.boldPart)
    const[normalPart, setNormalPart] = useState(props.normalPart)

    return(
        <div id = 'defaultTitleContainer'>
            <span>{boldPart}</span> {normalPart}
        </div>
    )
}