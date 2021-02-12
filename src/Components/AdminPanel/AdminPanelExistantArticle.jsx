import React, { useState, useEffect } from "react";

import { db } from '../../firebase'

export default function AdminPanelExistantArticle(props) {
  const [entities, setEntities] = useState([]);

  const templateEntity = {
      titleRU: "Заглавия",
      titleDescriptionRU: "Описание заглавия",
      textRU: "Текст статьи"
  }

  useEffect(() => {
    db.collection("articles")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEntities(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            titleRU: doc.data().titleRU,
            titleEN: doc.data().titleEN,
            titleDE: doc.data().titleDE,
            titleFR: doc.data().titleFR,
            titleESP: doc.data().titleESP,
            titleITL: doc.data().titleITL,
            titleDescriptionRU: doc.data().titleDescriptionRU,
            titleDescriptionEN: doc.data().titleDescriptionEN,
            titleDescriptionDE: doc.data().titleDescriptionDE,
            titleDescriptionFR: doc.data().titleDescriptionFR,
            titleDescriptionESP: doc.data().titleDescriptionESP,
            titleDescriptionITL: doc.data().titleDescriptionITL,
            textRU: doc.data().textRU,
            textEN: doc.data().textEN,
            textDE: doc.data().textDE,
            textFR: doc.data().textFR,
            textITL: doc.data().textITL,
            textESP: doc.data().textESP,
          }))
        );
      });
  }, []);



  return (
    <div id="adminPanelExistantArticle">
        <AdminPanelCreateArticleSpoiler props = {templateEntity} isNew = {true} location = {props.location} />
      {entities.map((entity) => (
        <AdminPanelCreateArticleSpoiler  
            props={entity}
        />
      ))}
    </div>
  );
}
