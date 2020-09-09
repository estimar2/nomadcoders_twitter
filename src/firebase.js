import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDH2_GTdD0lfU5nM6KKk9GpARxmGbbsACg",
  authDomain: "nomadcoders-twitter.firebaseapp.com",
  databaseURL: "https://nomadcoders-twitter.firebaseio.com",
  projectId: "nomadcoders-twitter",
  storageBucket: "nomadcoders-twitter.appspot.com",
  messagingSenderId: "505051292487",
  appId: "1:505051292487:web:e5c4cf8601a4c8380b6262",
  measurementId: "G-G5BZY0MJXZ",
};

export default firebase.initializeApp(firebaseConfig);
