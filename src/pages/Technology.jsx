import { useEffect, useState } from "react";

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const res = await fetch("http://192.168.1.254:3000/technology");
        const data = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTechnologies();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="text-center md:pb-[4rem] ">
      <header className="mb-[2rem] md:text-[20px] ">
        <h1 className="font-barlow tracking-[2px] md:pl-[2rem] lg:pl-[8rem] md:text-left mb-[1.5rem] md:mb-[0] uppercase md:py-[3rem] lg:text-[28px]">
          <span className="text-slate-600 font-bold inline-block mr-[1rem]">
            03
          </span>{" "}
          Space Launch 101
        </h1>
      </header>

      <section className="w-[100%]  mx-auto lg:w-[90%] lg:max-w[900px]  lg:ml-[auto] lg:mr-[0] flex flex-col gap-[4rem] lg:flex-row-reverse justify-between">
        <picture>
          <source
            srcSet={technologies[activeIndex].images.portrait}
            media="(min-width: 1024px)"
          />
          <img
            src={technologies[activeIndex].images.landscape}
            className="block max-w-[100%] w-full"
            alt=""
          />
        </picture>
        <div className="w-[90%] max-w-[400px] md:max-w-[500px] lg:w-[70%]  lg:max-w-[575px] mx-auto lg:mx-0 lg:flex items-center gap-[4rem] lg:text-left">
          <ul className="flex justify-center items-center my-[1.25rem] gap-[1rem] lg:flex-col ">
            {Array.from(
              { length: technologies.length },
              (_, index) => index
            ).map((dot, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-[40px] h-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] lg:text-[32px] rounded-full border-[1px] border-solid flex items-center justify-center cursor-pointer numbering ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {index + 1}
                </li>
              );
            })}
          </ul>
          <div>
            <p className="text-[14px] md:text-[16px] uppercase tracking-[2px] text-prim-light-blue">
              The Terminology...
            </p>
            <h2 className="uppercase text-[24px] md:text-[40px] lg:text-[56px]">
              {technologies[activeIndex].name}
            </h2>
            <p className="text-[15px] md:text-[16px] text-prim-light-blue lg:text-[18px] leading-[1.9]">
              {technologies[activeIndex].description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;
