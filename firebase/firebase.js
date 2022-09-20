// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS2KzCAEjRjPWeuuCsCy3xMKqJZBMycVQ",
  authDomain: "minseokpt-112a6.firebaseapp.com",
  projectId: "minseokpt-112a6",
  storageBucket: "minseokpt-112a6.appspot.com",
  messagingSenderId: "633427753732",
  appId: "1:633427753732:web:4286814d968ab281b3ee51",
  measurementId: "G-1P21DR113T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

export const firebaseInstance = getAuth();

export const dbService = getFirestore();
export const storageService = getStorage();