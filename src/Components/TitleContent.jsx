import React, {useState} from 'react'

import './TitleContent-style.css'

export default function TitleContent(props){
    
    const[boldPart, setBoldPart] = useState(props.boldPart)
    const[remainingText, setRemainingText] = useState(props.remainingText)

    const[typeOfTitle, setTypeOfTitle] = useState(props.typeOfTitle);
    
    return(
        {typeOfTitle == 'firts' &&
        }
    );
}
