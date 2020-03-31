import React, {useState} from 'react'

import './CurrentAnimalContent.css'

import TitleContent from './TitleContent'

function CurrentAnimalContent(props){
    
    const[animalToHunt, setAnimalToHunt] = useState(props.animalToHunt);
    const[imgSrc, setImgSrc] = useState(props.imgSrc);
    const[textContent, setTextContent] = useState(props.textContent);
    
    return(
        <div id = 'animalContent'>
            <TitleContent/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla autem eum quae ipsum eaque repellendus voluptate rerum laboriosam cum? Necessitatibus incidunt inventore unde, repellat magni laudantium iure fuga alias!
        </div>
    );
}

export default CurrentAnimalContent;