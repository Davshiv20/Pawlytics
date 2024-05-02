// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsibo1JRBEzNbyGaxNnwK-RMSIQejOjVI",
    authDomain: "pawlytics-5fb17.firebaseapp.com",
    projectId: "pawlytics-5fb17",
    storageBucket: "pawlytics-5fb17.appspot.com",
    messagingSenderId: "1067729456457",
    appId: "1:1067729456457:web:535da78fff53f0cdaede98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }