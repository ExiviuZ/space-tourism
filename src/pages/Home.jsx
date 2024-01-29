import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="my-auto flex flex-col items-center gap-[5rem] w-[90%] max-w-[400px] md:max-w-[none] pb-[4rem] mx-auto md:w-[450px] lg:w-[90%] lg:flex-row justify-between">
      <div className="items-center text-center mt-[3rem] max-w-[450px] lg:text-left">
        <h1 className="uppercase">
          <span className="font-barlow tracking-[2.7px] font-[200] lg:text-[28px]">
            So, you want to travel to
          </span>
          <span className="uppercase block text-[80px] md:text-[150px] lg:text-[150px]">
            Space
          </span>
        </h1>
        <p className="tracking-[1.25px] text-[15px] text-prim-light-blue font-[300] lg:text-[20px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link to={"/destination"} className="lg:self-end">
        <button className="w-[150px] relative h-[150px] md:w-[242px] md:h-[242px] md:text-[32px] bg-prim-white text-prim-black rounded-full tracking-[1.25px] uppercase text-[20px]  before:content-[''] before:w-[100%] before:h-[100%] before:bg-[#fff2] before:rounded-full before:absolute  before:left-0 before:top-0 hover:before:scale-[1.3] before:opacity-0 hover:before:opacity-[1] before:transition-all">
          Explore
        </button>
      </Link>
    </div>
  );
}

export default Home;
