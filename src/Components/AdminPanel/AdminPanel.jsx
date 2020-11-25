import React, { useContext } from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";

import "./AdminPanel-style.css";
import { Button } from "@material-ui/core";

import { auth } from "../../firebase";

import AdminPanelControlNavCRUD from "./AdminPanelControlNavCRUD";
import { AuthContext } from "../../auth";

export default function AdminPanel() {
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    history.push("/signInAdmin");
  };

  return (
    <div id="adminPanelBlock">
      <div id="headerAdmin">
        <h2>BELHUNT</h2>
        <div id="navButtons">
          <Link to="/admin/articles/ru">
            <button>Услуги</button>
          </Link>
          <Link to="/admin/prices/ru">
            <button>Цены</button>
          </Link>
          <Link to="/admin/news/ru">
            <button>Новости</button>
          </Link>
          <Link to="/admin/galleries/ru">
            <button>Галереи</button>
          </Link>
        </div>
        <button onClick={signOut}>
          Выйти
        </button>
      </div>
      <div id="controlBlock">
        <Switch>
          <Route path="/admin/:type">
            <AdminPanelControlNavCRUD />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
