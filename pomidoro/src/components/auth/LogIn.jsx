import { useState } from "react";
import { auth, googleProvider } from "../../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import YellowButton from "../ReUsableComponents/YellowButton";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col mx-auto w1/2 bg-primary-light-orange p-10 border-black border-2 rounded-lg">
      <h2 className="text-4xl"> Please log in!</h2>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        className="p-2 m-5 border-2 border-black w-80"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        className="p-2 m-5 border-2 border-black "
      />

      <YellowButton text="Log in" func={signIn} />
      <YellowButton text="Log in with Google" func={signInWithGoogle} />
    </div>
  );
}

export default LogIn;