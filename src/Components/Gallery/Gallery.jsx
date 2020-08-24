import React, { useState } from 'react'

import './Gallery-style.css'

import DoublePartTitle from '../DoublePartTitle';
import SeoBlock from '../SeoBlock';
import GalleryPhoto from './GalleryPhoto';

function Gallery(props) {

    const [type, setType] = useState(props.type);

    return (
        <div id = 'galleryContainer'>
            <DoublePartTitle 
                firstPartBold={ type === 'trophy' ? 'Фото трофеев' : 'Фото охотничьих домов' } 
                secondPartNormal={ type === 'trophy' ? 'Мы делем фотоотчеты о каждой охоте. В альбоме собраны наши знаковые трофеи.' : '' }/>
            
            <div id = 'gallery'>
                <GalleryPhoto/>
                <GalleryPhoto/>
                <GalleryPhoto/>
                <GalleryPhoto/>
                <GalleryPhoto/>

                {/* {
                    type === 'trophy' ? {

                    } 
                    : {
                        
                    }
                } */}

            </div>

            <SeoBlock/>

        </div>
    )
}

export default Gallery
