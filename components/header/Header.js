import Image from "next/image";
import Link from "next/link";
import HeaderButtons from "./HeaderButtons";

function Header() {
  return (
    <div className=" w-full h-auto flex shadow justify-center py-52 bg-corbett-green ">
      <div className=" absolute h-32 w-32 left-10 top-0">
        <Image
          src="/logo_green.png"
          layout="fill"
          objectFit=" contain"
          // className=" hover:cursor-pointer"
        />
      </div>
      <div className="flex flexgrow justify-center prose flex-col md:text-left text-center md:px-0 px-20">
        <h1 className=" md:text-8xl font-black">
          Corbett Heating and Plumbing
        </h1>
        <h5 className=" md:text-3xl text-gray-600">
          Honest services at simple prices
        </h5>
      </div>
    </div>
  );
}

export default Header;
