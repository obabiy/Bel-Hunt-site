import React, {useState} from 'react'

import './TitleContent-style.css'

export default function TitleContent(props){
    
    const[boldTitlePart, setBoldTitlePart] = useState(props.boldTitlePart)
    const[remainingTitlePart, setRemainingTitleText] = useState(props.remainingTitlePart)
    const[titleDescription, setTitleDescription] = useState(props.titleDescription)
    
    return(
        <div id = 'titleContent'>
            <span id = "mainTitle"><span>{boldTitlePart}</span> {remainingTitlePart}</span>
            
            {
                titleDescription !== '' ? (
                    <span id = "descriptionTitle">{titleDescription}</span>     
                ) : null
            }
        </div>
    );
}
