import React, { useState } from 'react'

import './GalleryPhoto-style.css'

function GalleryPhoto({url}) {
    const [imgUrl, setImgUrl] = useState(url);
    return (
        <div id = 'galleryPhoto'>
            <img src = {`${imgUrl}`} />
        </div>
    )
}

export default GalleryPhoto
