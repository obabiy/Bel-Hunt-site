import React, {useState, useEffect} from 'react'

import { Modal, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { db, storage } from '../../firebase'
import firebase from 'firebase'

const useStyles = makeStyles((theme) => ({
    paper: {    
      position: "absolute",
      margin: "auto",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 300,
      height: 400,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
    },
  }));

function AdminPanelGalleryAddPhoto() {
    const[image, setImage] = useState([])

    const[trophyOpen, setTrophyOpen] = useState(false)
    const[housesOpen, setHousesOpen] = useState(false)
    const[progress, setProgress] = useState(0)

    const classes = useStyles()
    const inputImgUpl = document.getElementById('imgUploader')

    // const handleChoose = (type) => {
    //     type === 'trophy' ? (setTrophyOpen(true)) : (setHousesOpen(true))
    // }
    // const[open, setOpen] = useState(false)
    // const hadleOpen = () => {

    // }
    

    const handleChangeImg = (event) => {
        if(event.target.files[0]) {
            // setImage(event.target.files)
            setImage(Array.from(event.target.files))    
        }
    }


    const handleUpload = () => {
        if(trophyOpen){
            image.forEach( (img) => {
                const uploadTask = storage.ref(`TrophyGallery/${img.name}`).put(img);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                    const progress = Math.round(
                        //анимация прогресса
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                        alert(error.message);
                    },
                    () => {
                        storage
                        .ref("TrophyGallery")
                        .child(img.name)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection("TrophyGallery").add({
                            imageUrl: url,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp() 
                            });
                            setProgress(0)
                        });
                    }
                );
                })
            setImage([])
            inputImgUpl.value = ''
        }else{
            image.forEach( (img) => {
                const uploadTask = storage.ref(`HousesGallery/${img.name}`).put(img);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                    const progress = Math.round(
                        //анимация прогресса
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                        alert(error.message);
                    },
                    () => {
                        storage
                        .ref("HousesGallery")
                        .child(img.name)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection("HousesGallery").add({
                            imageUrl: url,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                            });
                            setProgress(0)
                        });
                    }
                    );
                    })
                setImage([])
                inputImgUpl.value = ''
        }
    }
    
    return (
        <>
            <div className = 'gallery' onClick={()=>{
                setTrophyOpen(true)
                setHousesOpen(false)
            }}>
                <div className="title">Трофеи</div>
            </div>    
            <div className = 'gallery' onClick={()=>{
                setHousesOpen(true)
                setTrophyOpen(false)
            }}>
                <div className="title">Дома</div>
            </div>   

            <Modal
                open={trophyOpen || housesOpen}
                onClose={()=>{
                    setTrophyOpen(false)
                    setHousesOpen(false)
                }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper} id = 'modal'>
                    <h1>Добавить фото в {trophyOpen ? ('трофеи'):('дома')}</h1>
                    <label for='imgUploader'>Выберете фото:</label>
                    <input id = 'imgUploader' type = 'file' multiple onChange={handleChangeImg}/>
                    <progress id = 'imgUpload__progress' value={progress} max='100'/>
                    <Button 
                        disabled = {!image}
                        variant='contained'
                        color='primary'
                        onClick={() => {image[0] && handleUpload()} }>
                        Загрузить
                    </Button>
                    <Button
                        variant='contained'
                        onClick = {()=>{
                        setTrophyOpen(false)
                        setHousesOpen(false)
                    }}>
                        Отменить
                    </Button>
                </div>
            </Modal> 
        </>
    )
}

export default AdminPanelGalleryAddPhoto
