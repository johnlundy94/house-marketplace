import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAA13q9rZ-RZxDf3qULgcxF8-O7LHdxwk",
  authDomain: "house-marketplace-app-912aa.firebaseapp.com",
  projectId: "house-marketplace-app-912aa",
  storageBucket: "house-marketplace-app-912aa.appspot.com",
  messagingSenderId: "1037907920784",
  appId: "1:1037907920784:web:dfaab6c4007ed375e91515",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
