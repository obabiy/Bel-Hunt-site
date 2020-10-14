import React, { useState, useEffect } from "react";

import "./Gallery-style.css";

import DoublePartTitle from "../DoublePartTitle";
import SeoBlock from "../SeoBlock";
import GalleryPhoto from "./GalleryPhoto";
import PhotoModal from "./PhotoModal";

import { db } from "../../firebase";
import { FormattedMessage } from "react-intl";

function Gallery(props) {
  const [type, setType] = useState(props.type);
  const [trophyImages, setTrophyImages] = useState([]);
  const [housesImages, setHousesImages] = useState([]);

  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    db.collection("TrophyGallery")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTrophyImages(
          snapshot.docs.map((doc) => ({
            url: doc.data().imageUrl,
            id: doc.id,
          }))
        );
      });

    db.collection("HousesGallery")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setHousesImages(
          snapshot.docs.map((doc) => ({
            url: doc.data().imageUrl,
            id: doc.id,
          }))
        );
      });
  }, []);

  return (
    <div id="galleryContainer">
      <DoublePartTitle
        firstPartBold={
          type === "trophy" ? (
            <FormattedMessage id="galleryTrophy_title_gallery" />
          ) : (
            <FormattedMessage id="galleryHouses_title_gallery" />
          )
        }
        secondPartNormal={
          type === "trophy" ? (
            <FormattedMessage id="galleryTrophy_title_description_gallery" />
          ) : null
        }
      />

      <div id="gallery">
        {type === "trophy" &&
          trophyImages.map((img) => (
            <GalleryPhoto
              url={img.url}
              key={img.id}
              setSelectedImg={setSelectedImg}
            />
          ))}
        {type === "houses" &&
          housesImages.map((img) => (
            <GalleryPhoto
              url={img.url}
              key={img.id}
              setSelectedImg={setSelectedImg}
            />
          ))}

        {selectedImg && <PhotoModal selectedImg={selectedImg} setSelectedImg = {setSelectedImg}/>}
      </div>

      <SeoBlock />
    </div>
  );
}

export default Gallery;
