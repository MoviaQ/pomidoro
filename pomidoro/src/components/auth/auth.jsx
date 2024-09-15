import { useState } from 'react';
import SignIn from './SignUp';
import LogIn from './LogIn';

function Auth() {
  const [authMethod, setAuthMethod] = useState("signIn"); // "signIn" lub "logIn"
  const [isTransitioning, setIsTransitioning] = useState(false);

  function handleSwitch(newMethod) {
    setIsTransitioning(true); // Ustawienie flagi do rozpoczęcia animacji zanikania

    setTimeout(() => {
      setAuthMethod(newMethod); // Po zakończeniu animacji zmieniamy komponent
      setIsTransitioning(false); // Wyłączamy flagę po zakończeniu animacji
    }, 300); // Czas animacji (dopasowany do `duration-300`)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-primary-ligth-yellow">
      <div>
        <button className="text-xl m-2 p-2 hover:text-gray-700" onClick={() => handleSwitch("signIn")}>Sign in</button>
        <button className="text-xl m-2 p-2 hover:text-gray-700" onClick={() => handleSwitch("logIn")}>Log in</button>
      </div>

      <div className={`transition-all duration-300 transform ${isTransitioning ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
        {authMethod === "signIn" ? <SignIn /> : <LogIn />}
      </div>
    </main>
  );
}

export default Auth;