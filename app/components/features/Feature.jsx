'use client';

import Heading from './components/Heading';
import Items from './components/Items';

function Feature() {
  return (
    <div className="section w-full h-auto mb-12 bg-white pt-[5rem]">
      <div className="max-w-[45rem] pl-4 mx-auto text-left md:text-center lg:text-center">
        <Heading />
      </div>
      <div className="mx-auto pl-2 max-w-[45rem] grid w-full h-auto grid-cols-1 gap-12 mt-12 md:grid-cols-2 ">
        <Items />
      </div>
    </div>
  );
}

export default Feature;
