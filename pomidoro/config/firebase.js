import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Fix typo
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pomiidoro.firebaseapp.com",
  projectId: "pomiidoro",
  storageBucket: "pomiidoro.appspot.com",
  messagingSenderId: "641281417761",
  appId: "1:641281417761:web:d0179621be7fc7aa7db960",
  measurementId: "G-ZNQ62GZ48Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);


export const db = getFirestore(app); // Correct the function name