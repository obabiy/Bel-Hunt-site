import React, { useState, useEffect } from "react";

import "./AdminPanelExistantNews-style.css";

import { db } from "../../firebase";
import AdminPanelExistantNewsSpoiler from "./AdminPanelExistantNewsSpoiler";

export default function AdminPanelExistantNews(props) {
  const [entities, setEntities] = useState([]);

  const templateEntity = {
    titleRU: "Создать новость",
    textRU: "Краткое описание",
    id: 1,
  }

  useEffect(() => {
    db.collection("news")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEntities(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            titleRU: doc.data().titleRU,
            textRU: doc.data().textRU,
            titleEN: doc.data().titleEN,
            textEN: doc.data().textEN,
            titleFR: doc.data().titleFR,
            textFR: doc.data().textFR,
            titleDE: doc.data().titleDE,
            textDE: doc.data().textDE,
            titleITL: doc.data().titleITL,
            textITL: doc.data().textITL,
            titleESP: doc.data().titleESP,
            textESP: doc.data().textESP,
          }))
        );
      });
  }, []);

  return (
    <>
      <div className="pricesPart">
        <AdminPanelExistantNewsSpoiler key = {templateEntity.title} entity={templateEntity} isNew={true} location = {props.location}/>
      </div>
      {entities.map((entity) => (
        <div className="pricesPart">
          <AdminPanelExistantNewsSpoiler key = {entity.title} entity={entity} isNew={false} location = {props.location}/>
        </div>
      ))}
    </>
  );
}
