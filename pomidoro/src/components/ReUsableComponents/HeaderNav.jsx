function HeaderNav() {
    return (
      <div className="bg-primary-ligth-yellow h-16 border-4 border-gray-600 rounded-xl text-2xl overflow-hidden">
        <div className="flex w-full">
          <button className="flex-1 p-5 border-r-4 border-gray-600 bg-primary-ligth-yellow hover:bg-[#E6D099] rounded-l-xl">
            GreenHouse
          </button>
          <button className="flex-1 p-5 border-r-4 border-gray-600 bg-primary-ligth-yellow hover:bg-primary-light-green">
            Orchard
          </button>
          <button className="flex-1 p-5 bg-primary-ligth-yellow hover:bg-primary-ligth-orange rounded-r-xl">
            Shop
          </button>
        </div>
      </div>
    );
  }
  
  export default HeaderNav;