import React, { useState } from "react";

import { db } from "../../firebase";
import firebase from "firebase";

import $ from "jquery";

export default function AdminPanelExistantNewsSpoiler({
    entity,
    isNew,
    location,
}) {
    const [id, setId] = useState(entity.id);

    const [titleRU, setTitleRU] = useState(entity.titleRU);
    const [textRU, setTextRU] = useState(entity.textRU);

    const [titleEN, setTitleEN] = useState(entity.titleEN);
    const [textEN, setTextEN] = useState(entity.textEN);

    const [titleDE, setTitleDE] = useState(entity.titleDE);
    const [textDE, setTextDE] = useState(entity.textDE);

    const [titleFR, setTitleFR] = useState(entity.titleFR);
    const [textFR, setTextFR] = useState(entity.textFR);

    const [titleESP, setTitleESP] = useState(entity.titleESP);
    const [textESP, setTextESP] = useState(entity.textESP);

    const [titleITL, setTitleITL] = useState(entity.titleITL);
    const [textITL, setTextITL] = useState(entity.textITL);

    const isNewNews = isNew ?? true;

    const open = (event) => {
        $(event.currentTarget).siblings().slideToggle(500);
    };

    const addNews = () => {
        db.collection("news").add({
            titleRU: titleRU,
            textRU: textRU,
            titleEN: titleEN,
            textEN: textEN,
            titleDE: titleDE,
            textDE: textDE,
            titleFR: titleFR,
            textFR: textFR,
            titleITL: titleITL,
            textITL: textITL,
            titleESP: titleESP,
            textESP: textESP,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setTitleRU("");
        setTextRU("");
        setTitleEN("");
        setTextEN("");
        setTitleFR("");
        setTextFR("");
        setTitleDE("");
        setTextDE("");
        setTitleESP("");
        setTextESP("");
        setTitleITL("");
        setTextITL("");
    };

    const updateNews = () => {
        db.collection("news").doc(id).set(
            {
                titleRU: titleRU,
                textRU: textRU,
                titleEN: titleEN,
                textEN: textEN,
                titleDE: titleDE,
                textDE: textDE,
                titleFR: titleFR,
                textFR: textFR,
                titleITL: titleITL,
                textITL: textITL,
                titleESP: titleESP,
                textESP: textESP,
            },
            { merge: true }
        );
    };

    const resetValues = () => {
        setTitleRU(entity.titleRU);
        setTextRU(entity.textRU);
        setTitleEN(entity.titleEN);
        setTextEN(entity.textEN);
        setTitleFR(entity.titleFR);
        setTextFR(entity.textFR);
        setTitleDE(entity.titleDE);
        setTextDE(entity.textDE);
        setTitleESP(entity.titleESP);
        setTextESP(entity.textESP);
        setTitleITL(entity.titleITL);
        setTextITL(entity.textITL);
    };

    return (
        <div className="ap-news-container">
            <div className="titlePricesPart" onClick={open}>
                {
                  (!isNewNews && /ru/.test(location)
                    ? entity.titleRU
                    : /en/.test(location)
                    ? entity.titleEN
                    : /de/.test(location)
                    ? entity.titleDE
                    : /fr/.test(location)
                    ? entity.titleFR
                    : /itl/.test(location)
                    ? entity.titleITL
                    : /esp/.test(location)
                    ? entity.titleESP
                    : null) || entity.titleRU
                    
                }
                <img className="vectorButton" src="../../img/angle.svg" />
            </div>

            <div className="titlePricesPart two">
                <div className="two-children-container">
                    <label for="ap-news-title">Заголовок</label>
                    {/ru/.test(location) ? (
                        <input
                            value={titleRU}
                            id="ap-news-title"
                            onChange={(e) => setTitleRU(e.target.value)}
                        />
                    ) : /en/.test(location) ? (
                        <input
                            value={titleEN}
                            id="ap-news-title"
                            onChange={(e) => setTitleEN(e.target.value)}
                        />
                    ) : /de/.test(location) ? (
                        <input
                            value={titleDE}
                            id="ap-news-title"
                            onChange={(e) => setTitleDE(e.target.value)}
                        />
                    ) : /fr/.test(location) ? (
                        <input
                            value={titleFR}
                            id="ap-news-title"
                            onChange={(e) => setTitleFR(e.target.value)}
                        />
                    ) : /itl/.test(location) ? (
                        <input
                            value={titleITL}
                            id="ap-news-title"
                            onChange={(e) => setTitleITL(e.target.value)}
                        />
                    ) : /esp/.test(location) ? (
                        <input
                            value={titleESP}
                            id="ap-news-title"
                            onChange={(e) => setTitleESP(e.target.value)}
                        />
                    ) : null}
                    <label for="ap-news-text">Краткое описание</label>
                    {/ru/.test(location) ? (
                        <input
                            value={textRU}
                            id="ap-news-text"
                            onChange={(e) => setTextRU(e.target.value)}
                        />
                    ) : /en/.test(location) ? (
                        <input
                            value={textEN}
                            id="ap-news-text"
                            onChange={(e) => setTextEN(e.target.value)}
                        />
                    ) : /de/.test(location) ? (
                        <input
                            value={textDE}
                            id="ap-news-text"
                            onChange={(e) => setTextDE(e.target.value)}
                        />
                    ) : /fr/.test(location) ? (
                        <input
                            value={textFR}
                            id="ap-news-text"
                            onChange={(e) => setTextFR(e.target.value)}
                        />
                    ) : /itl/.test(location) ? (
                        <input
                            value={textITL}
                            id="ap-news-text"
                            onChange={(e) => setTextITL(e.target.value)}
                        />
                    ) : /esp/.test(location) ? (
                        <input
                            value={textESP}
                            id="ap-news-text"
                            onChange={(e) => setTextESP(e.target.value)}
                        />
                    ) : null}

                    <div className="ap-news-btns">
                        {isNewNews ? null : (
                            <button
                                className="ap-news-btns-delete"
                                onClick={() =>
                                    db.collection("news").doc(id).delete()
                                }
                            >
                                Удалить новость
                            </button>
                        )}
                        <button
                            className="ap-news-btns-reset"
                            onClick={resetValues}
                        >
                            Отменить изменения
                        </button>
                        {isNewNews ? (
                            <button
                                className="ap-news-btns-save"
                                disabled={
                                    !titleRU ||
                                    !textRU ||
                                    !titleEN ||
                                    !textEN ||
                                    !titleDE ||
                                    !textDE ||
                                    !titleFR ||
                                    !textFR ||
                                    !titleITL ||
                                    !textITL ||
                                    !titleESP ||
                                    !textESP
                                }
                                onClick={() => {
                                    addNews();
                                }}
                            >
                                Создать
                            </button>
                        ) : (
                            <button
                                className="ap-news-btns-save"
                                disabled={
                                    !titleRU ||
                                    !textRU ||
                                    !titleEN ||
                                    !textEN ||
                                    !titleDE ||
                                    !textDE ||
                                    !titleFR ||
                                    !textFR ||
                                    !titleITL ||
                                    !textITL ||
                                    !titleESP ||
                                    !textESP
                                }
                                onClick={() => {
                                    updateNews();
                                }}
                            >
                                Сохранить
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
