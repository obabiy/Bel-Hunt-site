import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDaU40ToZP8GStzj8UwA2RVhRC5pijhBls",
    authDomain: "belhunt-bc08e.firebaseapp.com",
    databaseURL: "https://belhunt-bc08e.firebaseio.com",
    projectId: "belhunt-bc08e",
    storageBucket: "belhunt-bc08e.appspot.com",
    messagingSenderId: "32360415368",
    appId: "1:32360415368:web:cda10b58d954bb860c5f3d"
});

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth }
