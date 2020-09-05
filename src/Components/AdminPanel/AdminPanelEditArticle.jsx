import React, { useState, useEffect } from "react";
import "./AdminPanelEditArticle-style.css";

import { db } from "../../firebase";
import { Modal, Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

function AdminPanelEditArticle() {
  const [entities, setEntities] = useState([]);

  const [title, setTitle] = useState("");
  const [articleText, setArticleText] = useState("");
  const [slug, setSlug] = useState("");
  const [id, setId] = useState(null);

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    db.collection("articles").onSnapshot((snapshot) => {
      setEntities(
        snapshot.docs.map((doc) => ({
          title: doc.data().title,
          text: doc.data().text,
          slug: doc.data().slug,
          id: doc.id,
        }))
      );
    });
  }, []);

  const updateArticle = () => {
    db.collection("articles").doc(id).set(
      {
        title: title,
        text: articleText,
        slug: slug
      },
      { merge: true }
    );
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOnChangeEditor = (event, editor) => {
    const data = editor.getData();
    setArticleText(data);
  };

  return (
    <div id="editingAtricle">
      <div id="editingAtricle__list">
        {entities.map((entity) => (
          <div className="articleCard">
            <img src={`${entity.img}`} alt="Wait.." />
            <b>{entity.title}</b>
            <button
              onClick={() => {
                setTitle(entity.title);
                setArticleText(entity.text);
                setSlug(entity.slug);
                setId(entity.id);
                handleOpen();
              }}
            >
              Редактировать
            </button>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper} id="modal">
          <h1>Редактировать статью</h1>

          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <CKEditor
            editor={ClassicEditor}
            data={articleText}
            onChange={handleOnChangeEditor}
          />

          <Input
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
          />

          <Button
            disabled={!title || !articleText || !slug}
            variant="contained"
            onClick={updateArticle}
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
    </div>
  );
}

export default AdminPanelEditArticle;
