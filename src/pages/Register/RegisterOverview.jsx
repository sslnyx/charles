import HeadingWLine from "../../components/HeadingWLine";
import overviewImg from "/img/register/eastvan.jpg";

const RegisterOverview = ({ imgLoaded, setImgLoaded }) => {
  return (
    <section className="bg-awhite pb-[80px]">
      <div className="container">
        <div className="flex flex-row flex-wrap">
          <div className="basis-1/1 lg:basis-1/2 flex justify-center items-center mb-5 md:mb-0">
            <div className="max-w-[430px]">
              <div className="headerWLine" data-aos="fade-in">
                <HeadingWLine className="text-5xl md:text-7xl">
                  Life
                  <br /> Unscripted
                </HeadingWLine>
              </div>
              <p className="mb-10">
                Meet the Charles, a remarkable new collection of passive,
                energy-efficient townhomes in Cedar Cottage. A vibrant
                neighbourhood setting brimming with possibilities in Vancouver.
                Sustainable designs made to last. Functional family living for
                all of life’s moments. The Charles has all the ingredients for a
                future as authentic and unique as you. Be bold. Live in Cedar
                Cottage. Only at The Charles.
              </p>
            </div>
          </div>

          <div className="basis-1/1 lg:basis-1/2">
            <div className="w-[110%] relative left-[15%]">
              <img
                data-aos="fade-left"
                className="rounded-[80px] aspect-[6/4] w-full z-10 relative max-h-[450px] lg:max-h-full object-cover object-top"
                src={overviewImg}
                onLoad={() => setImgLoaded(true)}
              />
              <div className="rounded-[80px] w-[120%] h-full bg-gray absolute -right-[30px] top-[50px]"></div>
              <div className="rounded-[80px] w-full h-full scale-[130%] border-[1px] border-gray absolute left-[30px] top-[50px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterOverview;
