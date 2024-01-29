import { useEffect, useState } from "react";
import { GoDotFill, GoDot } from "react-icons/go";

function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [crew, setCrew] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCrew() {
      try {
        const res = await fetch(
          "https://exiviuz.github.io/space-tourism-api/crew.json"
        );
        const data = await res.json();
        console.log(data);
        setCrew(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCrew();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-[90%] mx-auto text-center mt-[3rem] md:mb-[0] lg:mt-auto">
      <header>
        <h1 className="uppercase font-barlow tracking-[2px] md:text-left mb-[1.5rem]">
          <span className="text-slate-600 font-bold inline-block mr-[1rem]">
            02
          </span>{" "}
          Meet Your Crew
        </h1>
      </header>

      <section className="flex flex-col items-center gap-[1.5rem] md:flex-col-reverse lg:justify-between lg:flex-row-reverse lg:items-end mx-[auto] w-[90%] max-w-[450px] lg:w-[100%] lg:max-w-[none]">
        <div className="border-b-[1px] border-solid border-[rgba(255,255,255,0.1)] w-[100%] lg:w-[auto] md:h-[572px] lg:h-[auto] ">
          <img
            src={crew[activeIndex].images.png}
            className="block mx-auto h-[100%] w-[100%]"
            alt=""
          />
        </div>

        <article className="  flex flex-col lg:flex-col-reverse lg:items-start self-center lg:w-[50%] lg:text-left pb-[6rem]">
          <ul className="flex justify-center lg:mt-[4rem]">
            {Array.from({ length: crew.length }, (_, index) => index).map(
              (dot, index) => {
                return (
                  <li key={index}>
                    <GoDotFill
                      onClick={() => setActiveIndex(index)}
                      className={`${
                        activeIndex !== index ? "text-gray-500" : "text-white"
                      } cursor-pointer hover:text-white transition-colors h-[20px] w-[20px]`}
                    />
                  </li>
                );
              }
            )}
          </ul>

          <div>
            <h2 className="font-bellefair uppercase text-[16px] my-[1.5rem]">
              <span className="text-gray-400 md:text-[24px] lg:text-[32px]">
                Commander
              </span>{" "}
              <span className="block text-[24px] md:text-[40px] lg:text-[56px]">
                {crew[activeIndex].name}
              </span>
            </h2>

            <p className="text-prim-light-blue lg:text-[18px] max-w-[400px]">
              {crew[activeIndex].bio}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Crew;
