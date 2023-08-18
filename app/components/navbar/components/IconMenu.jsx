'use client';
import { BiMenu } from 'react-icons/bi';
function IconMenu({ setIsOpen }) {
  return (
    <BiMenu
      onClick={() => setIsOpen(true)}
      className="absolute z-20 top-[2%] right-[5%] hover:cursor-pointer lg:hidden"
      size="2rem"
    />
  );
}

export default IconMenu;
