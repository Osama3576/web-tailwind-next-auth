import Button from '../Button';
import ButtonTrans from '../ButtonTrans';

function CtaSection() {
  return (
    <div className="section section-cta static w-full h-auto text-center py-[1rem] md:py-[3rem] ">
      <div className="mt-8 max-w-[45rem] pl-4 mx-auto text-left md:text-center lg:text-center">
        <h1 className="mb-5 text-3xl font-bold main-heading lg:text-4xl">
          Boost your productivity today.
        </h1>
        <p className="leading-8 main-heading">
          Incididunt sint fugiat pariatur cupidatat consectetur sit
          cillum anim id veniam aliqua proident excepteur commodo do
          ea.
        </p>
      </div>
      <div className="my-[2rem] flex items-center gap-5 justify-center">
        <Button text="get started" />
        <ButtonTrans text="learn more" />
      </div>
    </div>
  );
}

export default CtaSection;
