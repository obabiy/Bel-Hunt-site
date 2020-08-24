import React, { useState } from "react";

import "./AdminPanelCreateArticle-style.css";
import {db} from "../../firebase";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button } from "@material-ui/core";

function AdminPanelCreateArticle() {
  const [articleText, setArticleText] = useState("");

  const handleOnChange = (event, editor) => {
    const data = editor.getData();
    setArticleText(data);
  };

  const addArticle = () => {
    db.collection("articles").add({
      articleText: articleText,
    });
  };

  return (
    <div id="articleCreate">
      <CKEditor
        id="articleCreate__editor"
        editor={ClassicEditor}
        onChange={handleOnChange}
      />

      <Button
        id="articleCreate__button"
        variant="contained"
        color="primary"
        onClick={addArticle}
      >
        Добавить статью
      </Button>
    </div>
  );
}

export default AdminPanelCreateArticle;
