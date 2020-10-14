import React from 'react'
import './PhotoModal-style.css'

function PhotoModal({selectedImg, setSelectedImg}) {
    return (
        <div id = 'selectedImg' onClick={() => setSelectedImg(null)}>
            <img src = {selectedImg}/>
        </div>
    )
}

export default PhotoModal
