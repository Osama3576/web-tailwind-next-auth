/* eslint-disable @next/next/no-img-element */
'use client';
function Logo() {
  return (
    <div className="hover:cursor-pointer op">
      <img
        className="lg:h-[6rem] md:ml-4 ml-4 lg:w-[6rem] h-[4rem] w-[4rem] hover:opacity-50 md:w-20"
        src="/next.svg"
        alt="Picture of the author"
      />
    </div>
  );
}

export default Logo;
