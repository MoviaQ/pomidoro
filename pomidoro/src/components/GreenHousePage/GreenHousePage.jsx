import Header from "../ReUsableComponents/Header";

function GreenHousePage() {
  return (
    <div className="bg-primary-light-yellow h-screen">
    <Header color="bg-primary-light-green" greenHouseHover="hover:bg-primary-light-yellow" orchardHover="hover:bg-[#D2D9A4]" shopHover="hover:bg-primary-light-orange" />
    </div>
  );
}

export default GreenHousePage;
