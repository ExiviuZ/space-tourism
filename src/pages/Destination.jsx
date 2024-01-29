import { useEffect, useState } from "react";

function Destination() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch("http://192.168.1.254:3000/destinations");
        const data = await res.json();
        setDestinations(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-[90%] max-w-[1000px] mx-auto text-center flex flex-col gap-[1rem] mt-[2rem] mb-[3rem] lg:text-left">
      <header>
        <h1 className="uppercase font-barlow tracking-[2px] mb-[1.5rem]">
          <span className="text-slate-600 font-bold inline-block mr-[1rem]">
            01
          </span>{" "}
          Pick Your Destination
        </h1>
      </header>

      <section className="flex flex-col items-center gap-[1.5rem] lg:flex-row lg:justify-between">
        <img
          src={destinations[activeIndex].images.png}
          className="w-[175px] h-[175px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] spinme "
          style={{ translate: "0 -10px " }}
          alt=""
        />
        <div className="max-w-[445px] lg:self-end">
          <ul className="flex justify-center gap-[2rem] mb-[1rem] lg:justify-start ">
            {destinations.map((destination, index) => {
              return (
                <li
                  key={destination.id}
                  className={`cursor-pointer relative before:content-[''] before:absolute pb-[1rem] before:w-[0] before:bottom-[0] before:left-0 before:right-0 before:mx-auto before:h-[3px] hover:before:w-[100%] before:bg-[rgba(255,255,255,0.4)]  uppercase tracking-[2px] before:transition-all destination-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {destination.name}
                </li>
              );
            })}
          </ul>
          <h2 className="text-[56px] uppercase lg:text-[100px]">
            {destinations[activeIndex].name}
          </h2>
          <p className="text-prim-light-blue pb-[1.5rem]">
            {destinations[activeIndex].description}
          </p>
          <article className="pt-[1.5rem] border-t-2 border-solid border-[rgba(255,255,255,0.1)] uppercase flex flex-col gap-[2rem] lg:gap-[6rem] lg:flex-row">
            <div>
              <h3 className="text-prim-light-blue text-[14px] mb-[0.5rem]">
                Avg. Distance
              </h3>
              <p className="font-bellefair text-[28px]">
                {" "}
                {destinations[activeIndex].distance}
              </p>
            </div>
            <div>
              <h3 className="text-prim-light-blue text-[14px] mb-[0.5rem]">
                Est. travel time
              </h3>
              <p className="font-bellefair text-[28px]">
                {" "}
                {destinations[activeIndex].travel}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Destination;
