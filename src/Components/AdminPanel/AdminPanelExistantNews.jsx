import React, { useState, useEffect } from "react";

import "./AdminPanelExistantNews-style.css";

import { db } from "../../firebase";
import AdminPanelExistantNewsSpoiler from "./AdminPanelExistantNewsSpoiler";

export default function AdminPanelExistantNews(props) {
  const [entities, setEntities] = useState([]);

  const templateEntity = {
    title: "Создать новость",
    text: "Краткое описание",
    id: 1,
  }

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
      <div className="pricesPart">
        <AdminPanelExistantNewsSpoiler key = {templateEntity.title} entity={templateEntity} isNew={true} />
      </div>
      {entities.map((entity) => (
        <div className="pricesPart">
          <AdminPanelExistantNewsSpoiler key = {entity.title} entity={entity} isNew={false} />
        </div>
      ))}
    </>
  );
}
