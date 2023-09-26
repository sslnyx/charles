import { Link } from "react-router-dom";
import HeroFrame from "../../components/HeroFrame";
import { Helmet } from "react-helmet";

const Thankyou = () => {
  return (
    <div className="relative flex-1 flex items-center overflow-hidden">
      <Helmet title="Thank You"/>
      <HeroFrame />
      <div className="container flex justify-center items-center my-[80px]">
        <div className="flex justify-center relative items-center h-[400px] w-[600px]">
          {/* <div className="rounded-[100px] w-full h-full bg-gray absolute scale-100 top-2 left-4"></div> */}
          <div className="rounded-[100px] w-full h-full border-gray border-2 absolute top-4 left-3"></div>

          <div className="text-center relative rounded-[100px] h-full w-full bg-brown flex flex-col justify-center text-white  p-[50px]">
            <h1 className="mb-8 text-3xl">Thank You</h1>
            <p>
              Thank you for your interest in The Charles. As a registrant, you will
              be among the first to receive the latest news and updates on the
              project as they become available.
            </p>
            <br />
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
