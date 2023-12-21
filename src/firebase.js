// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu1yTulDg9X7CLY5vmm3eJxvvAftVkG6g",
  authDomain: "chat-app-a076b.firebaseapp.com",
  databaseURL: "https://chat-app-a076b-default-rtdb.firebaseio.com",
  projectId: "chat-app-a076b",
  storageBucket: "chat-app-a076b.appspot.com",
  messagingSenderId: "179615011219",
  appId: "1:179615011219:web:7b676d89cc186399ee9866"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
