import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

/* import { initializeApp } from "firebase/app"; */

/* import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db; */
