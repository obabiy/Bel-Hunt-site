import React, {useState} from 'react'

import './CurrentAnimalContent.css'

import TitleContent from './TitleContent'
import ContactsBlock from './ContactsBlock'
import SeoBlock from './SeoBlock'

import ReactHtmlParser from 'react-html-parser'

function CurrentAnimalContent(props){
    
    const[boldTitlePart, setBoldTitlePart] = useState(props.title);
    const remainingTitlePart = 'в Беларуссии';
    const[titleDescription, setTitleDescription] = useState(props.titleDescription);

    const[imgSrc, setImgSrc] = useState(props.imageUrl);
    const[textContent, setTextContent] = useState(props.text);
    
    return(
        <div id = "animalContent">
            <TitleContent boldTitlePart = {`${boldTitlePart}`} remainingTitlePart = {`${remainingTitlePart}`} titleDescription = {`${titleDescription}`}/>
            <img id = "mainPhoto" src = {`${imgSrc}`}/>
            <div id = "textContent">{ ReactHtmlParser(textContent) }</div>
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