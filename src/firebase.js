// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH_aljRoFnhzgd6vG4bc8qkb5mTHiywpk",
  authDomain: "chat-b2933.firebaseapp.com",
  projectId: "chat-b2933",
  storageBucket: "chat-b2933.appspot.com",
  messagingSenderId: "34532385267",
  appId: "1:34532385267:web:722cb9e6c985b8e9b53286",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
