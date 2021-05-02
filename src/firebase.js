import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6gr7-5as5OHUsOWBk89MOA8Rncgg3akw",
    authDomain: "auth-1bc19.firebaseapp.com",
    projectId: "auth-1bc19",
    storageBucket: "auth-1bc19.appspot.com",
    messagingSenderId: "553594943233",
    appId: "1:553594943233:web:5fd129e900233323898d00"
})

const db = firebaseApp.firestore();
export default db;