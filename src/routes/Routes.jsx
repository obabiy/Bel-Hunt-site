import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HomePage from "../Components/HomePage";
import CurrentAnimalContent from "../Components/CurrentAnimalContent";
import Prices from "../Components/Prices";
import Gallery from "../Components/Gallery/Gallery";
import SignIn from "../Components/AdminPanel/SignIn";

import { db } from "../firebase";

export default function Routes() {
    const [animalsPages, setAnimalsPages] = useState([]);
    useEffect(() => {
        db.collection("articles").onSnapshot((snapshot) => {
          setAnimalsPages(
            snapshot.docs.map((doc) => ({
              title: doc.data().title,
              titleDescription: doc.data().titleDescription,
              text: doc.data().text,
              imageUrl: doc.data().imageUrl,
              slug: doc.data().slug,
              id: doc.id,
            }))
          );
        });
      }, []);
    return (
    <Switch>
      <Header />

      <Route path="/signInAdmin">
        <SignIn />
      </Route>

      <Route exact path="/">
        <HomePage />
      </Route>

      {animalsPages.map((page) => (
        <Route path={`/${page.slug}`}>
          <CurrentAnimalContent
            key={page.id}
            title={page.title}
            titleDescription={page.titleDescription}
            text={page.text}
            imageUrl={page.imageUrl}
          />
        </Route>
      ))}

      <Route path="/prices">
        <Prices />
      </Route>

      <Route path="/galleryTrophy">
        <Gallery type="trophy" />
      </Route>

      <Route path="/galleryHouses">
        <Gallery type="houses" />
      </Route>

      <Footer />
    </Switch>
  );
}
