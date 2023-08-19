import Link from 'next/link';

function Heading() {
  return (
    <div className="p-4 mt-4 text-center sm:p-14">
      <div>
        <h1 className="text-4xl font-bold main-heading sm:text-6xl">
          Data to enrich your <br></br>online business
        </h1>
        <p className="mt-10 main-heading ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem <br></br> cupidatat commodo. Elit sunt amet fugiat
          veniam occaecat fugiat aliqua.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10 font-semibold">
        <Link
          href="#"
          className="transition-all hover:text-slate-200 duration-500 text-[#bdbcff] font-normal px-[24px] py-[12px] hover:bg-cyan-900 border-3 border-blue-300 rounded-full hover:cursor-pointer"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Heading;
