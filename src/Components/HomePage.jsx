import React, { useState, useEffect } from "react";

import "./HomePage-style.css";

import DoublePartTitle from "./DoublePartTitle";
import NewsCardHomePage from "./NewsCardHomePage";

import { db } from "../firebase";
import { FormattedMessage, useIntl } from "react-intl";
import ReactHtmlParser from "react-html-parser";

export default function HomePage() {
  const [news, setNews] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    db.collection("news")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setNews(
          snapshot.docs.map((doc) => ({
            title: doc.data().title,
            text: doc.data().text,
            id: doc.id,
          }))
        );
      });
  }, []);

  return (
    <div id="homePageContainer">
      <DoublePartTitle
        firstPartBold={<FormattedMessage id = 'homePage_title_huntingBel_bold'/>}
        firstPartNormal={<FormattedMessage id = 'homePage_title_huntingBel_normal'/>}
        secondPartNormal={<FormattedMessage id = 'homePage_title_description_huntingBel_normal'/>}
        secondPartColored={<FormattedMessage id = 'homePage_title_description_huntingBel_colored'/>}
      />
      <div id="galleriesBlock">
        <div className="gallery" id="gal1">
          <div className="fadeBlock">
            <span>
              <FormattedMessage id="homePage_card_galleryTrophy" />
            </span>
          </div>
        </div>

        <div className="gallery" id="gal2">
          <div className="fadeBlock">
            <span>
              <FormattedMessage id="homePage_card_galleryHouses" />
            </span>
          </div>
        </div>
      </div>

      <div id="descriptionText">
        <FormattedMessage id="homePage_text_description" />
      </div>

      <img
        className="transition"
        id="topTransition"
        src="./img/top-transition.png"
      />

      <div id="animalNavContainer">
        <div className="titleNav">
          {ReactHtmlParser(
            intl.formatMessage({ id: "homePage_title_animalsToHunt" })
          )}
        </div>
        <div id="animalNavBlockContainer">
          <div className="navPart">
            <div className="navCard1">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_mooseHunting" />
                </span>
              </div>
            </div>
            <div className="navCard2">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_wisentHunting" />
                </span>
              </div>
            </div>
            <div className="navCard2">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_boarHunting" />
                </span>
              </div>
            </div>
            <div className="navCard1">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_roeDeerHunting" />
                </span>
              </div>
            </div>
          </div>

          <div className="navPart">
            <div className="navCard2">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_wolfHunting" />
                </span>
              </div>
            </div>

            <div className="navCard2">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_capercaillieHunting" />
                </span>
              </div>
            </div>
            <div className="navCard1">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_woodcockHunting" />
                </span>
              </div>
            </div>

            <div className="navCard2">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_partridgeHuning" />
                </span>
              </div>
            </div>
            <div className="navCard2">
              <div className="fadeBlock">
                <span>
                  <FormattedMessage id="homePage_card_snipeHunting" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="transition"
        id="bottomTransition"
        src="./img/bottom-transition.png"
      />

      <div id="huntingNewsContainer">
        <div className="titleNav">
          {ReactHtmlParser(
            intl.formatMessage({ id: "homePage_title_huntingNews" })
          )}
        </div>

        <div id="newsContainer">
          {news.map((oneNews) => (
            <NewsCardHomePage title={oneNews.title} text={oneNews.text} />
          ))}
        </div>
      </div>

      <img className="transition" src="./img/top-transition.png" />

      <div id="feedbackForm">
        <div id="titleFeedback"><FormattedMessage id = 'homePage_title_feedbackForm'/></div>
        <div id="descriptionFeedback"><FormattedMessage id = 'homePage_title_description_feedbackForm'/></div>
        <div id="inputBlock">
          <input placeholder={intl.formatMessage({id: 'homePage_placeholder_feedbackForm_email'})}/>
          <button><FormattedMessage id = 'homePage_button_feedbackForm'/></button>
        </div>
      </div>
    </div>
  );
}
