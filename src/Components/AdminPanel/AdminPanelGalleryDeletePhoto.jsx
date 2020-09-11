import React, {useState, useEffect} from 'react'
import './AdminPanelGalleryDeletePhoto-style.css'

import {db} from '../../firebase'
import GalleryPhoto from '../Gallery/GalleryPhoto'

function AdminPanelGalleryDeletePhoto() {
    const[type, setType] = useState('')

    const[trophyImages, setTrophyImages] = useState([])
    const[housesImages, setHousesImages] = useState([])

    useEffect(() => {
        db.collection('TrophyGallery')
            .orderBy('timestamp', 'desc')
            .onSnapshot(
            (snapshot) => {
                setTrophyImages(snapshot.docs.map((doc) => ({
                    url: doc.data().imageUrl,
                    id: doc.id
                })))
            }
        )

        db.collection('HousesGallery')
        .orderBy('timestamp', 'desc')
        .onSnapshot(
            (snapshot) => {
                setHousesImages(snapshot.docs.map((doc) => ({
                    url: doc.data().imageUrl,
                    id: doc.id
                })))
            }
        )
    }, []);

    return (
        <div id = 'deletePhoto'>
            <div id = 'deletePhoto__type'>
                <button onClick = {() => setType('trophy')}>Трофей</button>
                <button onClick = {() => setType('houses')}>Дома</button>
            </div>
            {
                type === 'trophy' 
                &&
                trophyImages.map( (img) => (
                    <GalleryPhoto key = {img.id} url = {img.url} remove = {true} gallery = {'TrophyGallery'} id = {img.id}/>
                )) 
            }
            {
                type === 'houses' 
                &&
                housesImages.map( (img) => (
                    <GalleryPhoto key = {img.id} url = {img.url} remove= {true} gallery = {'HousesGallery'} id = {img.id} /> 
                )) 
            }
        </div>
    )
}

export default AdminPanelGalleryDeletePhoto
