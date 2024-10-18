import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import Header from "../ReUsableComponents/Header";
function OrchardPage() {
  return (
    <div className="bg-[url('./../orchard.jpeg')] bg-cover bg-center h-screen">
      <Header
        color="bg-primary-light-orange"
        greenHouseHover="hover:bg-primary-light-yellow"
        orchardHover="hover:bg-primary-light-green"
        shopHover="hover:bg-[#F6CC9D]"
      />
    </div>
  );
}

export default OrchardPage;
