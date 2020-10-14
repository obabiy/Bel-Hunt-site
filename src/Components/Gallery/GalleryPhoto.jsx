import React, { useState } from "react";

import "./GalleryPhoto-style.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db, storage } from "../../firebase";

import $ from "jquery";

function GalleryPhoto({ url, remove, id, gallery, setSelectedImg }) {
  const [imgUrl, setImgUrl] = useState(url);
  const [docId, setDocId] = useState(id);
  const [galleryType, setGalleryType] = useState(gallery);
  const [isRemove, setIsRemove] = useState(remove);

  const deletePhoto = (event) => {
    let photoToDelete = storage.refFromURL(`${imgUrl}`); //отображение -
    db.collection(`${galleryType}`)
      .doc(docId)
      .delete()
      .then(() => {
        photoToDelete.delete();
      });
    setGalleryType("");
    setImgUrl("");
    setDocId("");
    setIsRemove(false);
  };

  return (
    <div id="galleryPhoto" onClick={() => setSelectedImg(imgUrl)}>
      <img src={`${imgUrl}`} alt="wait..." />
      
      {isRemove && (
        <DeleteForeverIcon id="deleteButton" onClick={deletePhoto} />
      )}
    </div>
  );
}

export default GalleryPhoto;
