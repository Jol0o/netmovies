import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBT40kXvLPXhU12ywjXV058849wXQ6Le_M",
    authDomain: "movies-3acfe.firebaseapp.com",
    projectId: "movies-3acfe",
    storageBucket: "movies-3acfe.appspot.com",
    messagingSenderId: "971488846071",
    appId: "1:971488846071:web:822672f3aacf0bb857b3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)