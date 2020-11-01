import React from "react";

import "./SeoBlock-style.css";

import { FormattedMessage, useIntl } from "react-intl";
import ReactHtmlParser from 'react-html-parser'

import $ from "jquery";

export default function SeoBlock() {
  const intl = useIntl()

  function open() {
    var text = $("#textPart"),
      animateTime = 500;
    var img = $("#img");

    if (text.height() === 90) {
      autoHeightAnimate(text, animateTime);
      img.css("transform", "rotate(180deg)");
    } else {
      text.stop().animate({ height: "90" }, animateTime);
      img.css("transform", "rotate(0deg)");
    }
  }

  function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
      autoHeight = element.css("height", "auto").height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
  }

  return (
    <div id="seoBlock">
      <span>
        <FormattedMessage id="seoBlock_title" />
      </span>
      <div id="textPart">
        {
          ReactHtmlParser(intl.formatMessage({id:'seoBlock_text'}))
        }
      </div>
      <button id="buttonMore" onClick={open}>
        <FormattedMessage id="seoBlock_button" />
        <img
          id="img"
          src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FangleMore.svg?alt=media&token=30abff7e-a411-4490-ae0f-47ad8efcf751"
        />
      </button>
      <script src="https://my.server.ru/jquery.min.js"></script>
    </div>
  );
}
