import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import "./CurrentAnimalContent.css";

import ContactsBlock from "./ContactsBlock";
import SeoBlock from "./SeoBlock";

import ReactHtmlParser from "react-html-parser";

function CurrentAnimalContent({ page }) {
  const locale = useIntl().locale;

  return (
    <div id="animalContent">
      
      <div id="titleContent">
        <span id="mainTitle">
          <span>{eval(`page.title${locale}`)}</span> {<FormattedMessage id='currentAnimalPage_text_titleEnding'/>}
        </span>

        {eval(`page.titleDescription${locale}`) !== "" ? (
          <span id="descriptionTitle">{eval(`page.titleDescription${locale}`)}</span>
        ) : null}
      </div>
      <div id = 'mainPhoto' style={{backgroundImage: `url(${page.imgUrl})`}}></div>

      <div id="textContent">{ReactHtmlParser(eval(`page.text${locale}`))}</div>
      <div id="galleryContainer">
        <div className="galleryPhoto">
          <div className="imgContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192" />
          </div>
        </div>
        <div className="galleryPhoto">
          <div className="imgContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192" />
          </div>
        </div>
        <div className="galleryPhoto">
          <div className="imgContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192" />
          </div>
        </div>
        <div className="galleryPhoto">
          <div className="imgContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FZoomIn.svg?alt=media&token=43339d46-aa25-40b8-a864-82f3ecf34192" />
          </div>
        </div>
      </div>
      <ContactsBlock />
      <SeoBlock/>
    </div>
  );
}

export default CurrentAnimalContent;
