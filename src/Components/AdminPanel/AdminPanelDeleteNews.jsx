import React, { useState, useEffect } from "react";
import './AdminPanelDeleteNews-style.css'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {db} from "../../firebase";

function AdminPanelDeleteNews() {
  const [entities, setEntities] = useState([]);

  const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/newsImg%2Fbell.png?alt=media&token=8d0904eb-4c8c-4803-a8b7-fd5fa8cfc1b9'

  useEffect(() => {
    db.collection("news")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEntities(
          snapshot.docs.map((doc) => ({
            title: doc.data().title,
            text: doc.data().text,
            id: doc.id,
          }))
        );
      });
  }, []);

  return (
    <>
      {entities.map((entity) => (
        <div id = 'newsListCard'>
            <img src={`${imgSrc}`}/>
            <b>{entity.title}</b>
            <p3>{entity.text}</p3>
            <DeleteForeverIcon onClick={ (event) => {db.collection('news').doc(entity.id).delete()} }/>
        </div>
      ))}
    </>
  );
}

export default AdminPanelDeleteNews;
