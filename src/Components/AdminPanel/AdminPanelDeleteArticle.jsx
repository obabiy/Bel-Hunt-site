import React, { useState, useEffect } from "react";
import './AdminPanelDeleteArticle-style.css'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {db, storage} from "../../firebase";

function AdminPanelDeleteArticle() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    db.collection("articles")
      .onSnapshot((snapshot) => {
        setEntities(
          snapshot.docs.map((doc) => ({
            title: doc.data().title,
            img: doc.data().imageUrl,
            id: doc.id
          }))
        );
      });
  }, []);

  return (
    <>
      {entities.map((entity) => (
        <div id = 'articleCard'>
            <img src={`${entity.img}`} alt = 'Wait..'/>
            <b>{entity.title}</b>
            <DeleteForeverIcon onClick={ (event) => {
              let photoToDelete = storage.refFromURL(`${entity.img}`) 
              db.collection('articles').doc(entity.id).delete().then(()=>{
                photoToDelete.delete()
              })
            }}/>
        </div>
      ))}
    </>
  );
}

export default AdminPanelDeleteArticle;
