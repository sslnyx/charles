import overview2 from "/img/register/fam.jpg";
import HeadingWithUnderline from "../../components/HeadingWithUnderline";
import Parallax from "react-rellax";
import HeadingWLine from "../../components/HeadingWLine";

const RegisterOverviewLeft = ({ imgLoaded2, setImgLoaded2 }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const headingLines = [
    {
      title: "16",
      subTitle: "Row Townhomes",
    },
    {
      title: "Passive Housing",
      subTitle: "",
    },
    {
      title: "Charles Dickens Catchment",
      subTitle: "",
    },
    {
      title: "Direct access to home from parking",
      subTitle: "",
    },
    {
      title: "EV Charging for all parking stalls",
      subTitle: "",
    },
    {
      title: "Estimated completion",
      subTitle: "Summer 2023",
    },
  ];
  return (
    <section className="md:p-0 xl:-mb-[50px]">
      <div className="container">
        <div className="flex flex-row flex-wrap">
          <div className="basis-1/1 lg:basis-1/2 mb-[80px] lg:mb-0">
            <div className="relative w-[120%] right-[100px] md:right-[180px]">
              <div className="w-full h-full border-[1px] absolute scale-110 top-[30px] rounded-[100px]"></div>

              <img
                data-aos="fade-right"
                className="w-full relative rounded-[100px] aspect-[5/4] max-h-[450px] lg:max-h-full object-cover"
                src={overview2}
                onLoad={() => setImgLoaded2(true)}
              />
            </div>
          </div>
          <div className="basis-1/1 lg:basis-1/2 flex items-center">
            <div className="md:translate-x-[50px]">
              <div className="headerWLine max-w-[650px]" data-aos="fade-in">
                <HeadingWLine className="text-[25px] md:text-4xl xl:text-5xl">
                  Inspired by the Tradition
                  <br /> in Cedar Cottage
                </HeadingWLine>
              </div>
              {headingLines.map(({ title, subTitle }, i) => (
                <HeadingWithUnderline
                  //   style={{ transform: `translateX(${20 * i}px)` }}
                  key={i}
                  title={title}
                  subTitle={subTitle}
                  indent=""
                  delay={i + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterOverviewLeft;
