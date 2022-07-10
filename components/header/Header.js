import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <div className="w-full h-32 justify-center flex items-center flex-col fixed top-0 bg-white shadow-md">
      
      <div className=" flex bg-yellow-400 w-full justify-center">
        <div className=" bg-green-400 w-2/3 flex justify-between text-3xl">
          <HeaderButton title="Home" />
          <HeaderButton title="About" />
          <HeaderButton title="Prices" />
        </div>
      </div>
    </div>
  );
}

export default Header;
