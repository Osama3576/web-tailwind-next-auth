'use client';
import Link from 'next/link';

function NavUl({ isOpen }) {
  return (
    <ul
      className={`${
        isOpen ? 'block' : 'hidden'
      } nav-ul absolute top-0 lg:mr-[6rem] transition duration-500 lg:border-2 lg:border-cyan-800  lg:rounded-full lg:p-[0.2rem] lg:pt-1 right-0 w-full h-screen pt-20 pl-8 font-normal bg-[rgba(7, 9, 13, .3)] text-[#cfcdff] lg:w-auto lg:h-auto md:w-[70%]  lg:flex lg:gap-7 lg:static lg:bg-transparent`}
    >
      <li className="transition-all duration-500 hover:cursor-pointer lg:px-[1rem] lg:py-[0.75rem] lg:rounded-full lg:hover:bg-cyan-900 lg:hover:text-[#f6f6ff]">
        Product
      </li>
      <li className="transition-all duration-500 hover:cursor-pointer lg:px-[1rem] lg:py-[0.75rem] lg:rounded-full lg:hover:bg-cyan-900 lg:hover:text-[#f6f6ff]">
        Features
      </li>
      <li className="transition-all duration-500 hover:cursor-pointer lg:px-[1rem] lg:py-[0.75rem] lg:rounded-full lg:hover:bg-cyan-900 lg:hover:text-[#f6f6ff]">
        Marketplace
      </li>
      <li className="transition-all duration-500 hover:cursor-pointer lg:px-[1rem] lg:py-[0.75rem] lg:rounded-full lg:hover:bg-cyan-900 lg:hover:text-[#f6f6ff]">
        Company
      </li>
      <span className="w-[80%] ml-[10px] mt-4 border border-zinc-200 h-[0.5px] block lg:hidden"></span>
      <div>
        <Link
          href="/login"
          className="font-semibold hover:cursor-pointer lg:hidden "
        >
          Log in &rarr;
        </Link>
      </div>
    </ul>
  );
}

export default NavUl;
