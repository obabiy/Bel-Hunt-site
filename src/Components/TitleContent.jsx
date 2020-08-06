import React, {useState} from 'react'

import './TitleContent-style.css'

export default function TitleContent(props){
    
    const[boldTitlePart, setBoldTitlePart] = useState(props.boldTitlePart)
    const[remainingTitlePart, setRemainingTitleText] = useState(props.remainingTitlePart)
    const[descriptionTitlePart, setDescriptionTitleText] = useState(props.descriptionTitlePart)
    
    return(
        <div id = 'titleContent'>
            <span id = "mainTitle"><span>{boldTitlePart}</span> {remainingTitlePart}</span>
            <span id = "descriptionTitle">{descriptionTitlePart}</span>
        </div>
    );
}
