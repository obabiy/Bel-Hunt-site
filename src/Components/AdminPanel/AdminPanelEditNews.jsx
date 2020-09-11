import React, { useState, useEffect } from "react";
import "./AdminPanelEditNews-style.css";

import { db } from "../../firebase";
import { Modal, Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function AdminPanelEditNews() {
  const [entities, setEntities] = useState([]);
  const imgSrc = "https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/newsImg%2Fbell.png?alt=media&token=8d0904eb-4c8c-4803-a8b7-fd5fa8cfc1b9";

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(null)

  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleOpen = () => {
      setOpen(true)
  }

  const updateNews = () => {
      db.collection('news').doc(id).set({
        title: title,
        text: text
      },{merge: true})
      setOpen(false)
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

  return(
  <>
    {
        entities.map((entity) => (
        <div id = 'newsListCard'>
            <img src={`${imgSrc}`}/>
            <b>{entity.title}</b>
            <p3>{entity.text}</p3>
          
            <button onClick={() => {
              setId(entity.id)
              setTitle(entity.title)
              setText(entity.text)
              handleOpen()
            }}>
              Edit
            </button>
        </div>
        ))
    }
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper} id="modal">
          <h1>Редактировать новость</h1>

          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <Input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />

          <Button
            disabled={!title || !text}
            variant="contained"
            onClick={updateNews}
          >
            Сохранить
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Отменить
          </Button>
        </div>
      </Modal>
  </>
  )
}

export default AdminPanelEditNews;
