import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { Context } from "../context";
import { FormattedMessage, useIntl } from "react-intl";

import $ from "jquery";

import "./Header-style.css";
import { db } from "../firebase";

function Header() {
  const [pages, setPages] = useState([]);
  const location = useLocation();

  const { changeLocale } = useContext(Context);
  const intl = useIntl();

  let titleLanguage = `title${intl.locale}`;

  const scrollPageUp = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  };

  const openHuntNav = () => {
    var nav = $("#navHunting"),
      time = 500,
      vector = $("#vector"),
      galleryNav = $("#navGallery"),
      vectorGallery = $("#vectorGallery");

    if (nav.height() === 0) {
      nav.animate({ height: 400 }, time);
      vector.css("transform", "rotate(90deg)");
    } else {
      nav.animate({ height: 0 }, time);
      vector.css("transform", "rotate(0deg)");
      galleryNav.animate({ height: 0 }, time);
      vectorGallery.css("transform", "rotate(0deg)");
    }
  };

  const openGalleryNav = () => {
    var galleryNav = $("#navGallery"),
      time = 500,
      nav = $("#navHunting"),
      vector = $("#vector"),
      vectorGallery = $("#vectorGallery");

    if (galleryNav.height() === 0) {
      galleryNav.animate({ height: 90 }, time);
      vectorGallery.css("transform", "rotate(180deg)");
    } else {
      galleryNav.animate({ height: 0 }, time);
      nav.animate({ height: 0 }, time);
      vector.css("transform", "rotate(0deg)");
      vectorGallery.css("transform", "rotate(0deg)");
    }
  };

  useEffect(() => {
    scrollPageUp();
  }, [location]);

  useEffect(() => {
    db.collection("articles").onSnapshot((snapshot) => {
      setPages(
        snapshot.docs.map((doc) => ({
          titleRU: doc.data().titleRU,
          titleEN: doc.data().titleEN,
          titleDE: doc.data().titleDE,
          titleFR: doc.data().titleFR,
          titleESP: doc.data().titleESP,
          titleITL: doc.data().titleITL,
          slug: doc.data().slug,
        }))
      );
    });
  }, []);

  return (
    <div id="header">
      <div className="headerPart" id="topHeader">
        <div id="sharingHeader">
          <FormattedMessage id="header_text_networks" />
          <a href="#">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FInstagram.svg?alt=media&token=121c40c6-2dd2-4524-8b8f-da3f1c1f030d" />
          </a>
          <a href="#">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FVK.svg?alt=media&token=f00a1e52-dd22-429c-9242-181636230be5" />
          </a>
          <a href="#">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FFacebook.svg?alt=media&token=524837ad-ad5f-4069-88dc-bdbd07473874" />
          </a>
        </div>

        <div id="titleHeader">
          <Link to="/">BELHUNT</Link>
        </div>

        <div id="langSelectHeader">
          <div id="number">+37 (529) 640 47 77</div>
          <select onChange={(e) => changeLocale(e.target.value)}>
            <option selected="selected">RU</option>
            <option>EN</option>
            <option>FR</option>
            <option>DE</option>
            <option>ITL</option>
            <option>ESP</option>
          </select>
        </div>
        <div id="burgerMenu__mobile">
          <div id="container">
            <nav id="menu">
              <ul id="burger__list">
                <Link to="/prices">
                  <li className="burger__link">
                    <FormattedMessage id="header_button_prices" />
                  </li>
                </Link>
                <Link to="/galleryTrophy">
                  <li className="burger__link">
                    <FormattedMessage id="header_button_galleryTrophy" />
                  </li>
                </Link>
                <Link to="/galleryHouses">
                  <li className="burger__link">
                    <FormattedMessage id="header_button_galleryHouses" />
                  </li>
                </Link>
                <Link to="/#">
                  <li className="burger">
                    <FormattedMessage id="header_button_contacts" />
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="headerPart" id="navHeader">
        <div id="buttonHuntingNav" onClick={openHuntNav}>
          <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2Faim.svg?alt=media&token=5dec7968-eb94-41c5-b36f-eb9fa3614d0f" />
          <FormattedMessage id="header_button_hunting" />
          <img
            id="vector"
            src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FnavHuntButVector.svg?alt=media&token=4d3c285d-f90f-44f1-a05e-526a516eb69a"
          />
          <div id="navHunting">
            <ul>
              {pages.map((page) => (
                <li onClick={openHuntNav}>
                  <Link to={`/${page.slug}`}>
                    {eval(`page.title${intl.locale}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button>
          <Link to="/prices">
            <FormattedMessage id="header_button_prices" /> {/*button prices */}
          </Link>
        </button>
        <button id="buttonGalleryNav" onClick={openGalleryNav}>
          <FormattedMessage id="header_button_gallery" />
          <img
            id="vectorGallery"
            src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FnavGalleryVector.svg?alt=media&token=6f2481af-1943-4e50-84bf-83045910d284"
          />
          <div id="navGallery">
            <ul>
              <Link to="/galleryTrophy">
                <li onClick={openGalleryNav}>
                  <FormattedMessage id="header_button_galleryTrophy" />
                </li>
              </Link>
              <Link to="/galleryHouses">
                <li onClick={openGalleryNav}>
                  <FormattedMessage id="header_button_galleryHouses" />
                </li>
              </Link>
            </ul>
          </div>
        </button>
        <button>
          <FormattedMessage id="header_button_contacts" />
        </button>

        <div id="searchBox">
          <input
            type="text"
            id="searchInput"
            placeholder={intl.formatMessage({
              id: "header_placeholder_search",
            })}
          />
          <button id="searchBut">
            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2Fsearch.svg?alt=media&token=2aa48c96-59e3-4746-8962-7d2992d2ee1b" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
