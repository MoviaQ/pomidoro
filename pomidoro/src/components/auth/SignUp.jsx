import { useState } from "react";
import { auth, firestore, googleProvider } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import YellowButton from "../ReUsableComponents/YellowButton";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Dodany stan dla nazwy użytkownika

  const signUp = async () => {
    try {
      // Rejestracja użytkownika przy użyciu e-maila i hasła
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Tworzenie dokumentu użytkownika w Firestore (nazwa dokumentu to uid)
      await setDoc(doc(firestore, "users", user.uid), {
        username: username,
        email: user.email,
        coins: 0, // Domyślnie 0 monet na początek
        createdAt: new Date(),
        lastSyncTime: new Date(),
      });

      // Dodanie użytkownika do lokalnej bazy danych (lowdb) za pomocą preload API
      await window.api.addUser({
        userId: user.uid,
        username: username,
        email: user.email,
        coins: 0,
        createdAt: new Date().toISOString(),
        lastSyncTime: new Date().toISOString(),
      });

      console.log("Zarejestrowano użytkownika:", user.uid);
      // Możesz dodać tutaj więcej logiki, np. przekierowanie użytkownika

    } catch (err) {
      console.error("Błąd podczas rejestracji:", err);
      alert(`Błąd podczas rejestracji: ${err.message}`);
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Rejestracja użytkownika za pomocą Google
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Sprawdzenie, czy użytkownik już istnieje w Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Jeśli użytkownik nie istnieje, tworzony jest nowy dokument
      if (!userDoc.exists()) {
        await setDoc(doc(firestore, "users", user.uid), {
          username: user.displayName || "Google User",
          email: user.email,
          coins: 0, // Domyślnie 0 monet na początek
          createdAt: new Date(),
          lastSyncTime: new Date(),
        });

        // Dodanie użytkownika do lokalnej bazy danych (lowdb)
        await window.api.addUser({
          userId: user.uid,
          username: user.displayName || "Google User",
          email: user.email,
          coins: 0,
          createdAt: new Date().toISOString(),
          lastSyncTime: new Date().toISOString(),
        });

        console.log("Zarejestrowano użytkownika z Google:", user.uid);
      } else {
        console.log("Użytkownik z Google już istnieje:", user.uid);
      }

    } catch (err) {
      console.error("Błąd podczas logowania z Google:", err);
      alert(`Błąd podczas logowania z Google: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col mx-auto bg-primary-light-green p-10 rounded-lg">
      <h2 className="text-4xl">Please sign up!</h2>
      
      {/* Pole do wprowadzenia nazwy użytkownika */}
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username..."
        className="p-2 m-5 w-80"
        required
      />

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        className="p-2 m-5 w-80"
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        className="p-2 m-5 "
        required
      />

      <YellowButton text="Sign up" func={signUp} />
      <YellowButton text="Sign up with Google" func={signInWithGoogle} />
    </div>
  );
}

export default SignUp;