import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="py-5 px-14 flex justify-between">
      <h1 className="font-bold text-3xl">Marmeto</h1>
      <div>
        <ol className="flex gap-10">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Shop</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ol>
      </div>
      <div>
        <ol className="flex gap-8">
          <li>
            <CiSearch size={20}/>
          </li>
          <li>
            <CiHeart size={20}/>
          </li>
          <li>
            <IoCartOutline size={20}/>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
