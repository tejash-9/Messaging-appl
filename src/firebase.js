import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCS2r-5L6ez2pAOtfMHNpkeCJRCVUqa8FY",
    authDomain: "messaging-appl.firebaseapp.com",
    projectId: "messaging-appl",
    storageBucket: "messaging-appl.appspot.com",
    messagingSenderId: "960936405437",
    appId: "1:960936405437:web:91245533861182ff694ad4"
})

const db = firebaseApp.firestore();

export default db;