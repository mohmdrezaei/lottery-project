"use client";

import Image from "next/image";
import Link from "next/link";

import { TbUserFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { usePathname } from "next/navigation";

function Header() {
  const currentPath = usePathname();

  return (
    <div className=" h-[70px]">
    <div className=" pt-5 md:py-5 shadow-sm z-20  bg-white fixed  w-full xl:w-[1440px] ">
      <header className="flex  items-center justify-between px-5 md:w-auto m-auto pb-2 md:pb-0  xl:w-[1200px] ">
        <div className="flex items-center gap-20 ">
         <h1 className="text-xl font-normal">پروژه لاتاری</h1>
          <button
        
            className=" md:hidden text-[30px] "
          >
            <LuMenu />
          </button>
          

          <ul className=" gap-16 font-normal hidden md:flex">
            <li>
              <Link   href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link className="font-normal" href="/"> درباره ما</Link>
            </li>
            <li>
              <Link className="font-normal" href="/"> تماس با ما</Link>
            </li>
          </ul>
        </div>

            <button className="  gap-2 text-[#28A745] "></button>
            
        
        
            <button
            
              className=" border-2 border-[#28A745] text-[#28A745] py-1 px-4  rounded-lg text-center hidden md:flex items-center gap-2"
            >
              <TbUserFilled />
              ورود | ثبت نام
            </button>
            <button
            
              className="text-[#28A745] p-2 rounded-lg text-[25px] block md:hidden border border-[#28A745]"
            >
              <AiOutlineLogin />
            </button>
       
      </header>
    </div>
    </div>
  );
}

export default Header;
