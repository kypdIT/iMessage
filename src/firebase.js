// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfNLx8B5cOf1LlZ8SM6uJD0TMISaNLV4s",
  authDomain: "imessage-clone-yt-a9258.firebaseapp.com",
  databaseURL: "https://imessage-clone-yt-a9258.firebaseio.com",
  projectId: "imessage-clone-yt-a9258",
  storageBucket: "imessage-clone-yt-a9258.appspot.com",
  messagingSenderId: "807941688940",
  appId: "1:807941688940:web:a7e43e36f467f059329249",
  measurementId: "G-WBN29K60J8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
