import React, {useEffect} from "react";
import { Link, useLocation, useRouteMatch, useParams } from "react-router-dom";

import "./AdminPanelControlNavCRUD-style.css";
import AdminPanelCreateArticle from "./AdminPanelCreateArticle";
import AdminPanelDeleteArticle from "./AdminPanelDeleteArticle";
import AdminPanelEditArticle from "./AdminPanelEditArticle";
import AdminPanelGalleryAddPhoto from "./AdminPanelGalleryAddPhoto";
import AdminPanelGalleryDeletePhoto from "./AdminPanelGalleryDeletePhoto";
import GalleryPhoto from "../Gallery/GalleryPhoto";
import { useHistory } from "react-router-dom";

import $ from "jquery";

import AdminPanelExistantNews from "./AdminPanelExistantNews";

export default function AdminPanelControlNavCRUD() {
  const history = useHistory();
  let location = useLocation().pathname;
  let type = useParams().type;
  let rootPath = useRouteMatch().url;

  const highlightLang = (lang) => {
    $("#sectionHeaderLang").children().css("color", "grey");
    switch (lang) {
      case "ru":
        $("#ruButton").css("color", "green");
        break;
      case "en":
        $("#enButton").css("color", "green");
        break;
      case "de":
        $("#deButton").css("color", "green");
        break;
      case "fr":
        $("#frButton").css("color", "green");
        break;
      case "esp":
        $("#espButton").css("color", "green");
        break;
      case "itl":
        $("#itlButton").css("color", "green");
        break;
      default:
    }
  };

  const setAdminContentLanguage = (lang) => {
    history.push(`${rootPath}/${lang}`);
    highlightLang(lang);
  };

  useEffect(() => {
    highlightLang('ru')
  }, [rootPath]);

  return (
    <div id="crudBlock">
      <div id="sectionHeader">
        <div id="crudTitle">
          {/articles/.test(location) ? "Статьи:" : null}
          {/galleries/.test(location) ? "Галлереи:" : null}
          {/news/.test(location) ? "Новости:" : null}
          {/prices/.test(location) ? "Цены:" : null}
        </div>

        <div id="sectionHeaderLang">
          <div id="ruButton" onClick={() => setAdminContentLanguage("ru")}>
            RU
          </div>
          <div id="enButton" onClick={() => setAdminContentLanguage("en")}>
            EN
          </div>
          <div id="deButton" onClick={() => setAdminContentLanguage("de")}>
            DE
          </div>
          <div id="frButton" onClick={() => setAdminContentLanguage("fr")}>
            FR
          </div>
          <div id="espButton" onClick={() => setAdminContentLanguage("esp")}>
            ESP
          </div>
          <div id="itlButton" onClick={() => setAdminContentLanguage("itl")}>
            ITL
          </div>
        </div>

        <div id="navCRUDBlock">
          <Link to={`${rootPath}/create`}>
            <button>Создать</button>
          </Link>
          {/* <Link to = {`${rootPath}/edit`}><button>Редактировать</button></Link> */}
          {/* <Link to = {`${rootPath}/delete`}><button>Удалить</button></Link> */}
        </div>
      </div>

      <div id="operationBlock">
        {
          /articles/.test(location) ? // <AdminPanelExistantArticle/>
          null : /news/.test(location) ? (
            <AdminPanelExistantNews />
          ) : /galleries/.test(location) ? (
            <p1></p1>
          ) : (
            <p1></p1>
          )

          // /create/.test(location) ?                 //Creating something
          // (
          //     type === 'articles' ? (
          //         <AdminPanelCreateArticle/>

          //     ): type === 'galleries' ? (
          //         <AdminPanelGalleryAddPhoto/>

          //     ) : type === 'news' ? (
          //         <AdminPanelCreateNews/>
          //     ) : null
          // ) : /edit/.test(location) ?                 //editing something
          // (
          //     type === 'articles' ? (
          //         <AdminPanelEditArticle/>

          //     ): type === 'galleries' ? (
          //         <p>Edit gallery</p>

          //     ) : type === 'news' ? (
          //         <AdminPanelEditNews/>

          //     ) : null
          // ) : /delete/.test(location) ? (             //deleting something
          //     type === 'articles' ? (
          //         <AdminPanelDeleteArticle/>

          //     ): type === 'galleries' ? (
          //         <AdminPanelGalleryDeletePhoto/>

          //     ) : type === 'news' ? (
          //         <AdminPanelDeleteNews />
          //     ) : null
          // ) : null
        }
      </div>
    </div>
  );
}
