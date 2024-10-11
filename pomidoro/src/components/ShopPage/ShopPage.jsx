import Header from "../ReUsableComponents/Header"
import BuyCard from "./BuyCard"


function ShopPage ()  {

    return( 
        <div className="bg-primary-light-orange h-screen">
          <Header color="bg-primary-light-yellow" greenHouseHover="hover:bg-[#F8EAC0]" orchardHover="hover:bg-primary-light-green" shopHover="hover:bg-primary-light-orange" />
          <BuyCard />
          
          </div>

    )

}

export default ShopPage