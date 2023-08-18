'use client';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillYoutube,
} from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';

/* eslint-disable @next/next/no-img-element */
function Left() {
  return (
    <div className="p-5">
      <div className="mb-6 hover:cursor-pointer op">
        <SiTailwindcss size="2em" color="blue" />
      </div>
      <p className="mb-6">
        Making the world a better place through constructing elegant
        hierarchies.
      </p>
      <ul className="flex gap-4 mb-4">
        <AiFillFacebook
          className="text-[#6b7280] hover:cursor-pointer hover:text-slate-200"
          size="1.5em"
        />
        <AiOutlineInstagram
          className="text-[#6b7280] hover:cursor-pointer hover:text-slate-200"
          size="1.5em"
        />
        <AiOutlineTwitter
          className="text-[#6b7280] hover:cursor-pointer hover:text-slate-200"
          size="1.5em"
        />
        <AiFillGithub
          className="text-[#6b7280] hover:cursor-pointer hover:text-slate-200"
          size="1.5em"
        />
        <AiFillYoutube
          className="text-[#6b7280] hover:cursor-pointer hover:text-slate-200"
          size="1.5em"
        />
      </ul>
    </div>
  );
}

export default Left;
