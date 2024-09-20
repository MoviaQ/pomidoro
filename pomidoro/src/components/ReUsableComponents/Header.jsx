import Profile from "./Profile";
import HeaderNav from "./HeaderNav";
function Header(props) {
  return (
    <div className="p-4 text-black text-xl flex">
      <Profile />
      <div className=" flex flex-1 justify-center">
        <HeaderNav color={props.color} greenHouseHover={props.greenHouseHover} orchardHover={props.orchardHover} shopHover={props.shopHover}/>
      </div>
    </div>
  );
}
export default Header;
