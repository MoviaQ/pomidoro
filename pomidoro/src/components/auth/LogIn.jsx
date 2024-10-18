import { useState } from "react";
import { auth, firestore, googleProvider } from "../../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import YellowButton from "../ReUsableComponents/YellowButton";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      // Logowanie za pomocą e-maila i hasła
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Pobranie dokumentu użytkownika z Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        console.log("Zalogowano użytkownika:", user.uid);
        console.log("Dane użytkownika:", userData);

        // Aktualizacja lokalnej bazy danych (lowdb)
        await window.api.addUser({
          userId: user.uid,
          username: userData.username,
          email: userData.email,
          coins: userData.coins,
          createdAt: userData.createdAt.toDate().toISOString(),
          lastSyncTime: userData.lastSyncTime.toDate().toISOString(),
        });

        // Możesz zaktualizować stan aplikacji na podstawie danych użytkownika
      } else {
        console.log("Dokument użytkownika nie istnieje w Firestore.");
        alert("Dokument użytkownika nie istnieje. Skontaktuj się z administratorem.");
      }

    } catch (err) {
      console.error("Błąd podczas logowania:", err);
      alert(`Błąd podczas logowania: ${err.message}`);
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Logowanie za pomocą Google
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Sprawdzenie, czy dokument użytkownika istnieje w Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        console.log("Zalogowano użytkownika z Google:", user.uid);
        console.log("Dane użytkownika z Google:", userData);

        // Aktualizacja lokalnej bazy danych (lowdb)
        await window.api.addUser({
          userId: user.uid,
          username: userData.username,
          email: userData.email,
          coins: userData.coins,
          createdAt: userData.createdAt.toDate().toISOString(),
          lastSyncTime: userData.lastSyncTime.toDate().toISOString(),
        });

      } else {
        console.log("Dokument użytkownika nie istnieje w Firestore.");
        alert("Dokument użytkownika nie istnieje. Zarejestruj się najpierw.");
      }

    } catch (err) {
      console.error("Błąd podczas logowania z Google:", err);
      alert(`Błąd podczas logowania z Google: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col mx-auto bg-primary-light-orange p-10 rounded-lg">
      <h2 className="text-4xl">Please log in!</h2>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        className="p-2 m-5  w-80"
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        className="p-2 m-5  "
        required
      />

      <YellowButton text="Log in" func={signIn} />
      <YellowButton 
        text="Log in with Google" 
        func={signInWithGoogle} 
        imgSrc='https://img.icons8.com/?size=100&id=17949&format=png&color=000000'
      />
    </div>
  );
}

export default LogIn;