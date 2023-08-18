'use client';
import Link from 'next/link';

function NavUl({ isOpen }) {
  return (
    <ul
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute top-0 transition duration-500 right-0 w-full h-screen pt-20 pl-8 font-semibold bg-fuchsia-100 lg:w-auto lg:h-auto md:w-[70%] lg:flex lg:gap-7 lg:static lg:pt-0 lg:bg-transparent`}
    >
      <li className="hover:cursor-pointer">Product</li>
      <li className="hover:cursor-pointer">Features</li>
      <li className="hover:cursor-pointer">Marketplace</li>
      <li className="hover:cursor-pointer">Company</li>
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
