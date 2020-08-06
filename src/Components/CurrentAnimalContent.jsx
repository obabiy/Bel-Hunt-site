import React, {useState} from 'react'
import { Markup } from 'interweave'

import './CurrentAnimalContent.css'

import TitleContent from './TitleContent'
import ContactsBlock from './ContactsBlock'
import SeoBlock from './SeoBlock'

function CurrentAnimalContent(props){
    
    const[boldTitlePart, setBoldTitlePart] = useState(props.boldTitlePart);
    const[remainingTitlePart, setRemainingTitlePart] = useState(props.remainingTitlePart);
    const[descriptionTitlePart, setDescriptionTitlePart] = useState(props.descriptionTitlePart);

    const[imgSrc, setImgSrc] = useState(props.imgSrc);
    const[textContent, setTextContent] = useState(props.textContent);
    
    return(
        <div id = "animalContent">
            <TitleContent boldTitlePart = {`${boldTitlePart}`} remainingTitlePart = {`${remainingTitlePart}`} descriptionTitlePart = {`${descriptionTitlePart}`}/>
            <img id = "mainPhoto" src = {`${imgSrc}`}/>
            <div id = "textContent"><Markup content = {textContent}/></div>
            <div id = "galleryContainer">
                    <div className = "galleryPhoto"><div className = "imgContainer"><img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192"/></div></div>
                    <div className = "galleryPhoto"><div className = "imgContainer"><img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192"/></div></div>
                    <div className = "galleryPhoto"><div className = "imgContainer"><img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192"/></div></div>
                    <div className = "galleryPhoto"><div className = "imgContainer"><img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192"/></div></div>
            </div>
            <ContactsBlock/>
            <SeoBlock/>
        </div>
    );
}

export default CurrentAnimalContent;