import Cards from './components/Cards';

function Pricing() {
  return (
    <div className="section section-pricing py-[3rem]">
      <div className="max-w-[45rem] pl-4 mx-auto  text-center ">
        <p className="mb-2 text-sm font-semibold text-indigo-600">
          Pricing
        </p>
        <h1 className="mb-5 text-3xl font-bold main-heading lg:text-4xl">
          Pricing plans for teams of all sizes
        </h1>
        <p className="leading-8 main-heading">
          Distinctio et nulla eum soluta et neque labore quibusdam.
          Saepe et quasi iusto modi velit ut non voluptas in.
          Explicabo id ut laborum.
        </p>
      </div>

      <Cards />
    </div>
  );
}

export default Pricing;
