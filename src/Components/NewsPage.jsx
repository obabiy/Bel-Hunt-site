import React from 'react'
import { useEffect, useState } from 'react';

import './NewsPage-style.css'
import NewsCardHomePage from './NewsCardHomePage'

import * as firebase from 'firebase'

export default function NewsPage(props){
    useEffect( () => {
        const db = firebase.firestore();
        db.collection("news").onSnapshot(getDocs => {
            const readyData = getDocs.docs.map(doc => doc.data());
            setnewslist(readyData);
        })
    }, []);
    const [newslist, setnewslist] = useState([]);
    return(
        <div id = "newsPageContainer">
            {
                newslist.map(news => <NewsCardHomePage news = { news }/>)
            }
        </div>
    )
}