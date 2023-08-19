function ButtonTrans({ text }) {
  return (
    <>
      <a
        href="#"
        className="transition-all hover:text-slate-200 duration-500 text-[#bdbcff] font-normal px-[24px] py-[12px] hover:bg-cyan-900 border-3 border-blue-300 rounded-full hover:cursor-pointer"
      >
        {text} &rarr;
      </a>
    </>
  );
}

export default ButtonTrans;
