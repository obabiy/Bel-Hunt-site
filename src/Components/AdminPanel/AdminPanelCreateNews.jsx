import React, { useState } from "react";

import "./AdminPanelCreateNews-styles.css";

import { Button } from "@material-ui/core";

import {db} from "../../firebase";
import firebase from "firebase";


function AdminPanelCreateNews() {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNews = (event) => {
    event.preventDefault();

    db.collection("news").add({
      title: title,
      text: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTitle("");
    setText("");

  };

  const resetInputs = () => {
    setTitle("");
    setText("");
  };

  return (
    <form id="createForm">
      <h3>Название:</h3>
      <input
        value={title}
        placeholder={"Впишите название новости"}
        onChange={(event) => setTitle(event.target.value)}
      />
      <h3>Текст: </h3>

      <textarea
        value={text}
        placeholder={"Впишите текст для новости"}
        onChange={(event) => setText(event.target.value)}
      />
      <div id="createFormButtons">
        <Button
          disabled = {!title || !text}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addNews}
        >
          Создать
        </Button>
        <Button
          disabled = {!title && !text}
          variant="contained"
          color="secondary"
          onClick={resetInputs}
        >
          Сбросить
        </Button>
      </div>
    </form>
  );
}

export default AdminPanelCreateNews;
