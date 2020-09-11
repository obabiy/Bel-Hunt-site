import React, { useState } from "react";

import "./AdminPanelCreateArticle-style.css";
import { db, storage } from "../../firebase";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button } from "@material-ui/core";

function AdminPanelCreateArticle() {
  const [title, setTitle] = useState("");
  const [titleDescription, setTitleDescription] = useState('');
  const [articleText, setArticleText] = useState("");
  const [image, setImage] = useState(null);
  const [slug, setSlug] = useState('');
  const [progress, setProgress] = useState(0); 

  let inputImgUpl = document.getElementById('article__imgUpl')

  const handleOnChangeEditor = (event, editor) => {
    const data = editor.getData();
    setArticleText(data);
  };

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
              title: title,
              titleDescription: titleDescription,
              text: articleText,
              imageUrl: url,
              slug: slug
            });
            setProgress(0)
            setImage(null)
            setArticleText('')
            setTitle('')
            setSlug('')
            setTitleDescription('')
            inputImgUpl.value = ''
          });
      }
    );
  };

  return (
    <div id="articleCreate">
      <label for = 'article__title'>Заголовок:</label>
      <input
        id = 'article__title'
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label for = 'article__titleDescription'>Краткое описание под заглавием:</label>
      <input
        id = 'article__titleDescription'
        type="text"
        placeholder = 'необязательно'
        value={titleDescription}
        onChange={(e) => {
          setTitleDescription(e.target.value);
        }}
      />
      <label for = 'article__editor'>Текст:</label>
      <CKEditor
        id="article__editor"
        editor={ClassicEditor}
        data={articleText}
        onChange={handleOnChangeEditor}
      />
      <label for = 'article__slug'>Строка для url:</label>
      <input id='article__slug' type = 'text' value={slug} onChange={(e)=>{setSlug(e.target.value)}}/>
      
      <label for = 'article__progress'>Фото:</label>
      <input id = 'article__imgUpl' type="file" onChange={handleChangeImg}/>
      
      <progress id = 'article__progress' value={progress} max="100" />
      

      <Button
        disabled={!title || !articleText || !image || !slug}
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
