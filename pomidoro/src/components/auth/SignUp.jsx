import { useState } from "react";
import { auth, googleProvider } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import YellowButton from "../ReUsableComponents/YellowButton";

function SignUp() {
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
    <div className="flex flex-col mx-auto w1/2 bg-primary-light-green p-10 border-black border-2 rounded-lg">
        <h2 className="text-4xl"> Please sign in!</h2>
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

      <YellowButton text="Sign up" func={signIn} />
      <YellowButton text="
      ɢ
      Sign up with Google" func={signInWithGoogle} />

      
    </div>
  );
}

export default SignUp
;
