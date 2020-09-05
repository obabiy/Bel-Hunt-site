import React, { useState, useEffect } from 'react'

import './Gallery-style.css'

import DoublePartTitle from '../DoublePartTitle';
import SeoBlock from '../SeoBlock';
import GalleryPhoto from './GalleryPhoto';

import {db} from '../../firebase'

function Gallery(props) {

    const [type, setType] = useState(props.type)
    const[trophyImages, setTrophyImages] = useState([])
    const[housesImages, setHousesImages] = useState([])

    useEffect(() => {
        db.collection('TrophyGallery').onSnapshot(
            (snapshot) => {
                setTrophyImages( snapshot.docs.map( (doc) => ({
                    url: doc.data().imageUrl
                }) ))
            }
        )
        
        db.collection('HousesGallery').onSnapshot(
            (snapshot) => {
                setHousesImages( snapshot.docs.map( (doc) => ({
                    url: doc.data().imageUrl
                }) ))
            }
        )
        
    }, []);

    return (
        <div id = 'galleryContainer'>
            <DoublePartTitle 
                firstPartBold={ type === 'trophy' ? 'Фото трофеев' : 'Фото охотничьих домов' } 
                secondPartNormal={ type === 'trophy' ? 'Мы делем фотоотчеты о каждой охоте. В альбоме собраны наши знаковые трофеи.' : '' }/>
            
            <div id = 'gallery'>
                {
                    type === 'trophy' 
                    && 
                    trophyImages.map((img) => (
                        <GalleryPhoto url = {img.url}/>
                    ))
                }
                {
                    type === 'houses' 
                    && 
                    housesImages.map((img) => (
                        <GalleryPhoto url = {img.url}/>
                    ))
                }

            </div>

            <SeoBlock/>

        </div>
    )
}

export default Gallery
