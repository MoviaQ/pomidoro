import { Link } from 'react-router-dom';

function HeaderNav(props) {
  return (
    <div className={` ${props.color} h-16 border-4 border-gray-600 rounded-xl text-2xl overflow-hidden`}>
      <div className="flex w-full">
        <Link to="/greenhouse" className={`flex-1 p-5 border-r-4 border-gray-600 ${props.greenHouseHover} rounded-l-xl`}>
          <p>GreenHouse</p>
        </Link>
        <Link to="/orchard" className={`flex-1 p-5 border-r-4 border-gray-600 ${props.orchardHover}`}>
          <p>Orchard</p>
        </Link>
        <Link to="/shop" className={`flex-1 p-5 ${props.shopHover} rounded-r-xl`}>
          <p>Shop</p>
        </Link>
      </div>
    </div>
  );
}

export default HeaderNav;