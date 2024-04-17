// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4HiyeFurFfXhEunBm2LTRojUoHC9xlZQ",
    authDomain: "gestionale-mattatoyo.firebaseapp.com",
    projectId: "gestionale-mattatoyo",
    storageBucket: "gestionale-mattatoyo.appspot.com",
    messagingSenderId: "822298978395",
    appId: "1:822298978395:web:cb03fc69e2cb76cf4e777e",
    measurementId: "G-DKSV87LTGH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

/* import { collection, getDocs } from "firebase/firestore";
import { app, db } from "./firebase";

export async function getEventi(db) {

    const eventi = collection(db, 'Eventi');

    try {
        const snapshot = await getDocs(eventi);
        const data = snapshot.docs.map(doc => doc._document.data.value.mapValue.fields);
        return data;
    } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
        return [];
    }
} */