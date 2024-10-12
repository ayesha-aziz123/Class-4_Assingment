import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div > 
      <div className=" flex fixed top-0 z-10 flex-wrap w-full justify-between text-white bg-[#24252ae7] p-3 text-2xl ">
        <div className="text-[20px]">
        <ul className="  font-[600] flex gap-12 ml-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/career"}>Career</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
        </div>
        <div className="flex gap-4 text-[18px]">
          <button className="bg-blue-500 px-5 py-[2px]  rounded-[12px] hover:bg-red-500"><Link href={"/signup"} >Signup</Link></button>
          <button className="bg-blue-500 px-5 py-[2px]  rounded-[12px] hover:bg-red-500"><Link href={"/login"}>Login</Link></button>
        </div>
        
      </div>
    </div>
  );
};

export default Header;