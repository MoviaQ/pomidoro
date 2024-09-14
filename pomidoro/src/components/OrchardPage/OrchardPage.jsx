import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
function OrchardPage() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-primary-light-green p-4 text-black text-xl">Donut</div>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-700 transition-colors duration-500 p-2 border-2 border-black rounded-lg m-5"
      >
        Logout
      </button>
    </div>
  );
}

export default OrchardPage;
