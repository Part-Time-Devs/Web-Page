import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaP2OAQ9y93hgMuogwIZJMTMB32zaMfZE",
  authDomain: "ptdev-d64a2.firebaseapp.com",
  projectId: "ptdev-d64a2",
  storageBucket: "ptdev-d64a2.appspot.com",
  messagingSenderId: "513451075074",
  appId: "1:513451075074:web:b6f2ad04ac935fb983291b",
  measurementId: "G-961G4LXQX1"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig)

const db = fireBaseApp.firestore();

export default firebase;
