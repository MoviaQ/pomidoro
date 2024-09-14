import { useState } from "react";
import { auth, googleProvider } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import YellowButton from "../ReUsableComponents/YellowButton";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        className="p-2 m-5 border-2 border-black "
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        className="p-2 m-5 border-2 border-black "
      />

      <YellowButton text="Sign in" func={signIn} />
      <YellowButton text="Sign in with Google" func={signInWithGoogle} />

      
    </div>
  );
}

export default SignIn;
