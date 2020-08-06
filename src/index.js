import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDaU40ToZP8GStzj8UwA2RVhRC5pijhBls",
    authDomain: "belhunt-bc08e.firebaseapp.com",
    databaseURL: "https://belhunt-bc08e.firebaseio.com",
    projectId: "belhunt-bc08e",
    storageBucket: "belhunt-bc08e.appspot.com",
    messagingSenderId: "32360415368",
    appId: "1:32360415368:web:cda10b58d954bb860c5f3d"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
