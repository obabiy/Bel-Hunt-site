import React, { useState } from "react";

import "./NewsCardHomePage-style.css";

export default function NewsCardHomePage(props) {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);

    const imgSrc =
        "https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2Fadvertising_24.svg?alt=media&token=0ef9e9d0-7015-4464-aac2-e4dae33d0d5c";

    return (
        <div id="cardContainer">
            <img id="newsCardImg" src={`${imgSrc}`} />
            <div id="newsCardContent">
                <div id="newsCardTitle">
                    <b>{title}</b>
                </div>
                <div id="newsCardDescription">{text}</div>
            </div>
        </div>
    );
}
