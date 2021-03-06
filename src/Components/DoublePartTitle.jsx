import React, {useState} from 'react'

import './DoublePartTitle-style.css'

export default function DoublePartTitle(props){
    
    const[firstPartBold, setFirstPartBold] = useState(props.firstPartBold)
    const[firstPartNormal, setFirstPartNormal] = useState(props.firstPartNormal)
    const[secondPartNormal, setSecondPartNormal] = useState(props.secondPartNormal)
    const[secondPartColored, setSecondPartColored] = useState(props.secondPartColored)


    return(
        <div id = 'doubleTitleContainer'>
            <div className = 'titleParts' id = 'firstPart'>
                <span>{firstPartBold ? firstPartBold : null}</span> {firstPartNormal ? firstPartNormal : null} 
            </div>
            <div className = 'titleParts' id = 'secondPart'>
                {secondPartNormal ? secondPartNormal : null} <span>{secondPartColored ? secondPartColored : null}</span>
            </div>
        </div>
    );
}