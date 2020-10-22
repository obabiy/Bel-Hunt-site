import React, { useState, useEffect } from "react";

export function Adminpanelexistantarticle() {
  const [entities, setEntities] = useState([]);

  const [title, setTitle] = useState("");
  const [titleDescription, setTitleDescription] = useState("");
  const [articleText, setArticleText] = useState("");
  const [slug, setSlug] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    db.collection("articles").onSnapshot((snapshot) => {
      setEntities(
        snapshot.docs.map((doc) => ({
          titleRU: doc.data().titleRU,
          titleEN: doc.data().titleEN,
          titleDE: doc.data().titleDE,
          titleFR: doc.data().titleFR,
          titleESP: doc.data().titleESP,
          titleITL: doc.data().titleITL,
          titleDescriptionRU: doc.data().titleDescriptionRU,
          titleDescriptionEN: doc.data().titleDescriptionEN,
          titleDescriptionDE: doc.data().titleDescriptionDE,
          titleDescriptionFR: doc.data().titleDescriptionFR,
          titleDescriptionESP: doc.data().titleDescriptionESP,
          titleDescriptionITL: doc.data().titleDescriptionITL,
          textRU: doc.data().textRU,
          textEN: doc.data().textEN,
          textDE: doc.data().textDE,
          textFR: doc.data().textFR,
          textESP: doc.data().textESP,
          textITL: doc.data().textITL,
          img: doc.data().imageUrl,
          slug: doc.data().slug,
        }))
      );
    });
  }, []);

  return (
    <div id="adminPanelExistantArticle">
      {entities.map((entity) => (
        <AdminPanelCreateArticleSpoiler 
            props={entity}
        />
      ))}
    </div>
  );
}
