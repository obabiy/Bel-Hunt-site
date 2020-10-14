import React, {useState, useEffect} from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import './CurrentAnimalContent.css'

import TitleContent from './TitleContent'
import ContactsBlock from './ContactsBlock'
import SeoBlock from './SeoBlock'

import ReactHtmlParser from 'react-html-parser'

function CurrentAnimalContent(props){
    
    const locale = useIntl().locale

    // const[boldTitlePartRU, setBoldTitlePartRU] = useState(props.titleRU);
    // const[boldTitlePartEN, setBoldTitlePartEN] = useState(props.titleEN);
    // const[boldTitlePartFR, setBoldTitlePartFR] = useState(props.titleFR);
    // const[boldTitlePartDE, setBoldTitlePartDE] = useState(props.titleDE);
    // const[boldTitlePartITL, setBoldTitlePartITL] = useState(props.titleITL);
    // const[boldTitlePartESP, setBoldTitlePartESP] = useState(props.titleESP);

    // const remainingTitlePart = 'в Беларуссии';
    
    // const[titleDescriptionRU, setTitleDescriptionRU] = useState(props.titleDescriptionRU);
    // const[titleDescriptionEN, setTitleDescriptionEN] = useState(props.titleDescriptionEN);
    // const[titleDescriptionDE, setTitleDescriptionDE] = useState(props.titleDescriptionDE);
    // const[titleDescriptionFR, setTitleDescriptionFR] = useState(props.titleDescriptionFR);
    // const[titleDescriptionITL, setTitleDescriptionITL] = useState(props.titleDescriptionITL);
    // const[titleDescriptionESP, setTitleDescriptionESP] = useState(props.titleDescriptionESP);

    // const[textContentRU, setTextContentRU] = useState(props.textRU);
    // const[textContentEN, setTextContentEN] = useState(props.textEN);
    // const[textContentDE, setTextContentDE] = useState(props.textDE);
    // const[textContentFR, setTextContentFR] = useState(props.textFR);
    // const[textContentESP, setTextContentESP] = useState(props.textESP);
    // const[textContentITL, setTextContentITL] = useState(props.textITL);
    
    const[boldTitlePart, setBoldTitlePart] = useState('');
    const[titleDescription, setTitleDescription] = useState('');
    const[textContent, setTextContent] = useState('');
    const[imgSrc, setImgSrc] = useState(props.imageUrl);
    
    useEffect(() => {
        switch(locale){
            case 'RU':
                setBoldTitlePart(props.titleRU)
                setTitleDescription(props.titleDescriptionRU)
                setTextContent(props.textRU)
                break;
            case 'EN':
                setBoldTitlePart(props.titleEN)
                setTitleDescription(props.titleDescriptionEN)
                setTextContent(props.textEN)
                break;
            case 'FR':
                setBoldTitlePart(props.titleFR)
                setTitleDescription(props.titleDescriptionFR)
                setTextContent(props.textFR)
                break;
            case 'DE':
                setBoldTitlePart(props.titleDE)
                setTitleDescription(props.titleDescriptionDE)
                setTextContent(props.textDE)
                break;
            case 'ESP':
                setBoldTitlePart(props.titleESP)
                setTitleDescription(props.titleDescriptionESP)
                setTextContent(props.textESP)
                break;
            case 'ITL':
                setBoldTitlePart(props.titleITL)
                setTitleDescription(props.titleDescriptionITL)
                setTextContent(props.textITL)
                break;
            default:
        }
    }, [locale]);

    return(
        <div id = "animalContent">
            <TitleContent boldTitlePart = {"ываыва"} remainingTitlePart = {<FormattedMessage id = 'currentAnimalPage_text_titleEnding'/>} titleDescription = {`${titleDescription}`}/>
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