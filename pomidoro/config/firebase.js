import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pomidoro-9a244.firebaseapp.com",
  projectId: "pomidoro-9a244",
  storageBucket: "pomidoro-9a244.appspot.com",
  messagingSenderId: "992279755197",
  appId: "1:992279755197:web:0a8ec8cc96013de9ff7ad4",
  measurementId: "G-PS2991D98X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
