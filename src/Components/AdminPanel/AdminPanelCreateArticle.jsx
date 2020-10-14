import React, { useState } from "react";

import "./AdminPanelCreateArticle-style.css";
import { db, storage } from "../../firebase";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button } from "@material-ui/core";
import AdminPanelCreateArticleSpoiler from "./AdminPanelCreateArticleSpoiler";

function AdminPanelCreateArticle() {
  const [titleRU, setTitleRU] = useState("");
  const [titleEN, setTitleEN] = useState("");
  const [titleFR, setTitleFR] = useState("");
  const [titleDE, setTitleDE] = useState("");
  const [titleITL, setTitleITL] = useState("");
  const [titleESP, setTitleESP] = useState("");

  const [titleDescriptionRU, setTitleDescriptionRU] = useState("");
  const [titleDescriptionEN, setTitleDescriptionEN] = useState("");
  const [titleDescriptionFR, setTitleDescriptionFR] = useState("");
  const [titleDescriptionDE, setTitleDescriptionDE] = useState("");
  const [titleDescriptionITL, setTitleDescriptionITL] = useState("");
  const [titleDescriptionESP, setTitleDescriptionESP] = useState("");

  const [articleTextRU, setArticleTextRU] = useState("");
  const [articleTextEN, setArticleTextEN] = useState("");
  const [articleTextFR, setArticleTextFR] = useState("");
  const [articleTextDE, setArticleTextDE] = useState("");
  const [articleTextITL, setArticleTextITL] = useState("");
  const [articleTextESP, setArticleTextESP] = useState("");

  const [image, setImage] = useState(null);
  const [slug, setSlug] = useState("");
  const [progress, setProgress] = useState(0);

  let inputImgUpl = document.getElementById("article__imgUpl");

  const handleChangeImg = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`ArticlesImages/${image.name}`).put(image);
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
          .ref("ArticlesImages")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("articles").add({
              titleRU: titleRU,
              titleEN: titleEN,
              titleFR: titleFR,
              titleDE: titleDE,
              titleITL: titleITL,
              titleESP: titleESP,
              titleDescriptionRU: titleDescriptionRU,
              titleDescriptionEN: titleDescriptionEN,
              titleDescriptionFR: titleDescriptionFR,
              titleDescriptionITL: titleDescriptionITL,
              titleDescriptionESP: titleDescriptionESP,
              titleDescriptionDE: titleDescriptionDE,
              textRU: articleTextRU,
              textEN: articleTextEN,
              textFR: articleTextFR,
              textDE: articleTextDE,
              textITL: articleTextITL,
              textESP: articleTextESP,
              imageUrl: url,
              slug: slug,
            });
            setProgress(0);
            setImage(null);
            setTitleRU("");
            setTitleDescriptionRU("");
            setArticleTextRU("");
            setTitleEN("");
            setTitleDescriptionEN("");
            setArticleTextEN("");
            setTitleDE("");
            setTitleDescriptionDE("");
            setArticleTextDE("");
            setTitleITL("");
            setTitleDescriptionITL("");
            setArticleTextITL("");
            setTitleFR("");
            setTitleDescriptionFR("");
            setArticleTextFR("");
            setTitleESP("");
            setTitleDescriptionESP("");
            setArticleTextESP("");
            setSlug("");
            inputImgUpl.value = "";
          });
      }
    );
  };

  return (
    <div id="articleCreate">
      <AdminPanelCreateArticleSpoiler
        language="RU"
        articleTitle={titleRU}
        articleTitleDescription={titleDescriptionRU}
        articleText={articleTextRU}
        setArticleTitle={setTitleRU}
        setArticleTitleDescription={setTitleDescriptionRU}
        setArticleText={setArticleTextRU}
      />
      <AdminPanelCreateArticleSpoiler
        language="EN"
        articleTitle={titleEN}
        articleTitleDescription={titleDescriptionEN}
        articleText={articleTextEN}
        setArticleTitle={setTitleEN}
        setArticleTitleDescription={setTitleDescriptionEN}
        setArticleText={setArticleTextEN}
      />
      <AdminPanelCreateArticleSpoiler
        language="FR"
        articleTitle={titleFR}
        articleTitleDescription={titleDescriptionFR}
        articleText={articleTextFR}
        setArticleTitle={setTitleFR}
        setArticleTitleDescription={setTitleDescriptionFR}
        setArticleText={setArticleTextFR}
      />
      <AdminPanelCreateArticleSpoiler
        language="DE"
        articleTitle={titleDE}
        articleTitleDescription={titleDescriptionDE}
        articleText={articleTextDE}
        setArticleTitle={setTitleDE}
        setArticleTitleDescription={setTitleDescriptionDE}
        setArticleText={setArticleTextDE}
      />
      <AdminPanelCreateArticleSpoiler
        language="ITL"
        articleTitle={titleITL}
        articleTitleDescription={titleDescriptionITL}
        articleText={articleTextITL}
        setArticleTitle={setTitleITL}
        setArticleTitleDescription={setTitleDescriptionITL}
        setArticleText={setArticleTextITL}
      />
      <AdminPanelCreateArticleSpoiler
        language="ESP"
        articleTitle={titleESP}
        articleTitleDescription={titleDescriptionESP}
        articleText={articleTextESP}
        setArticleTitle={setTitleESP}
        setArticleTitleDescription={setTitleDescriptionESP}
        setArticleText={setArticleTextESP}
      />

      <label for="article__slug">Строка для url:</label>
      <input
        id="article__slug"
        type="text"
        value={slug}
        onChange={(e) => {
          setSlug(e.target.value);
        }}
      />

      <label for="article__progress">Фото:</label>
      <input id="article__imgUpl" type="file" onChange={handleChangeImg} />

      <progress id="article__progress" value={progress} max="100" />

      <Button
        disabled={
          !titleDE ||
          !titleRU ||
          !titleFR ||
          !titleESP ||
          !titleITL ||
          !titleEN ||
          !articleTextDE ||
          !articleTextEN ||
          !articleTextESP ||
          !articleTextRU ||
          !articleTextITL ||
          !articleTextFR ||
          !image ||
          !slug
        }
        id="articleCreate__button"
        variant="contained"
        color="primary"
        onClick={handleUpload}
      >
        Добавить статью
      </Button>
    </div>
  );
}

export default AdminPanelCreateArticle;
