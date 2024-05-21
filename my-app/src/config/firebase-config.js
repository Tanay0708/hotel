// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDbqnYJIBcvdbaKUa7UoqyK3ZPEuhBLz9I",
  authDomain: "hotel-7f10e.firebaseapp.com",
  projectId: "hotel-7f10e",
  storageBucket: "hotel-7f10e.appspot.com",
  messagingSenderId: "84603268961",
  appId: "1:84603268961:web:804c05c0c70900a3d85f20",
  measurementId: "G-ZS3N7Q1F7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app)