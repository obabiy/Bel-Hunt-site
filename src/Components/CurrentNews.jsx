import React, {useState} from 'react'
import { Markup } from 'interweave'

import './CurrentNews-style.css'

import TitleContent from './TitleContent'
import ContactsBlock from './ContactsBlock'
import SeoBlock from './SeoBlock'

export default function CurrentNews(props){
    
    const[titlePart, setBoldTitlePart] = useState(props.titlePart);

    const[imgSrc, setImgSrc] = useState(props.imgSrc);
    const[textContent, setTextContent] = useState(props.textContent);
    
    return(
        <div id = "newsContent">
            <TitleContent boldTitlePart = {`${titlePart}`}/>
            <img id = "mainPhoto" src = {`${imgSrc}`}/>
            <div id = "textContent"><Markup content = {textContent}/></div>
            
            <ContactsBlock/>
            <SeoBlock/>
        </div>
    );
}