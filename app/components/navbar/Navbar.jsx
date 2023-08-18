/* eslint-disable @next/next/no-img-element */
'use client';

import Logo from './components/Logo';
import Navigation from './components/Navigation';
import LoginBtn from './components/LoginBtn';
function Navbar() {
  return (
    <header className="flex items-center justify-between w-full lg:p-6 ">
      <Logo />
      <Navigation />

      <LoginBtn text="Login" />
    </header>
  );
}

export default Navbar;
//
