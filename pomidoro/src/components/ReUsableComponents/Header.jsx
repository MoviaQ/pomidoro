import Profile from "./Profile";
import HeaderNav from "./HeaderNav";
function Header() {
  return (
    <div className="bg-primary-light-green h-screen p-4 text-black text-xl flex">
      <Profile />
      <div className="flex flex-1 justify-center">
        <HeaderNav />
      </div>
    </div>
  );
}
export default Header;
