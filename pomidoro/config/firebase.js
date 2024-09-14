// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBoLJHOIlQMwTByvA2cLF0YqG1W1Y4NUE",
  authDomain: "pomidoro-9a244.firebaseapp.com",
  projectId: "pomidoro-9a244",
  storageBucket: "pomidoro-9a244.appspot.com",
  messagingSenderId: "992279755197",
  appId: "1:992279755197:web:b8755630098342b0ff7ad4",
  measurementId: "G-MLH26N15XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
