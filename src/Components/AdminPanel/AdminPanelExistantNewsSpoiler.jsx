import React, { useState, useEffect } from "react";

import { db } from "../../firebase";
import firebase from "firebase";

import $ from "jquery";

export default function AdminPanelExistantNewsSpoiler({ entity, isNew }) {
  const [title, setTitle] = useState(entity.title);
  const [text, setText] = useState(entity.text);
  const [id, setId] = useState(entity.id);


  const [titleRU, setTitleRU] = useState(entity.titleRU);
  const [textRU, setTextRU] = useState(entity.textRU);

  const [titleEN, setTitleEN] = useState(entity.titleEN);
  const [textEN, setTextEN] = useState(entity.textEN);

  const [titleDE, setTitleDE] = useState(entity.titleDE);
  const [textDE, setTextDE] = useState(entity.textDE);

  const [titleFR, setTitleFR] = useState(entity.titleFR);
  const [textFR, setTextFR] = useState(entity.textFR);

  const [titleESP, setTitleESP] = useState(entity.titleESP);
  const [textESP, setTextESP] = useState(entity.textESP);

  const [titleITL, setTitleITL] = useState(entity.titleITL);
  const [textITL, setTextITL] = useState(entity.textITL);
  

  const isNewNews = isNew ?? true;

  const open = (event) => {
    $(event.currentTarget).siblings().slideToggle(500);
  };

  const addNews = () => {
    db.collection("news").add({
      title: title,
      text: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTitle("");
    setText("");
  };

  const updateNews = () => {
    db.collection("news").doc(id).set(
      {
        title: title,
        text: text,
      },
      { merge: true }
    );
  };

  const resetValues = () => {
    setTitle(entity.title);
    setText(entity.text);
  };


  return (
    <div className="ap-news-container">
      <div className="titlePricesPart" onClick={open}>
        {entity.title}
        <img className="vectorButton" src="../../img/angle.svg" />
      </div>
      <div className="titlePricesPart two">
        <div className="two-children-container">
        <label for="ap-news-title">Заголовок</label>

        
        <input
          
          value={title}
          id="ap-news-title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="ap-news-text">Краткое описание</label>
        <input
          value={text}
          id="ap-news-text"
          onChange={(e) => setText(e.target.value)}
        />


        
        <div className="ap-news-btns">
          {isNewNews ? null : (
            <button
              className="ap-news-btns-delete"
              onClick={() => db.collection("news").doc(id).delete()}
            >
              Удалить новость
            </button>
          )}
          <button className="ap-news-btns-reset" onClick={resetValues}>
            Отменить изменения
          </button>
          {isNewNews ? (
            <button
              className="ap-news-btns-save"
              disabled={!title || !text}
              onClick={() => {
                addNews();
              }}
            >
              Создать
            </button>
          ) : (
            <button
              className="ap-news-btns-save"
              disabled={!title || !text}
              onClick={() => {
                updateNews();
              }}
            >
              Сохранить
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
