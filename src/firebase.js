// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyABI0FkhVAauCska9rX_jgkeFOARvxYD9k",
    authDomain: "chat-app-3b1df.firebaseapp.com",
    projectId: "chat-app-3b1df",
    storageBucket: "chat-app-3b1df.appspot.com",
    messagingSenderId: "565054869657",
    appId: "1:565054869657:web:05d1e84ddb9283da1be808"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
