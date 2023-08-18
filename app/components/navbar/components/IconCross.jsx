'use client';
import { RxCross1 } from 'react-icons/rx';
function IconCross({ setIsOpen }) {
  return (
    <RxCross1
      onClick={() => setIsOpen(false)}
      className="absolute z-20 top-[2%] right-[5%] hover:cursor-pointer lg:hidden"
      size="1.5rem"
    />
  );
}

export default IconCross;
