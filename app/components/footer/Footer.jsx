'use client';
import Left from './components/Left';
import Right from './components/Right';

function Footer() {
  return (
    <div className="bg-[#111827] text-cyan-50 p-1 lg:px-20 lg:pt-20">
      <div className="grid grid-col-1 lg:grid-cols-2 lg:pb-12">
        <Left />
        <Right />
      </div>
      <div className="border-t-[1px] border-[#6b7280] pt-5">
        <p className="text-[#b8bad0]">
          © 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
