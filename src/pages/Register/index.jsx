import { useState, useEffect, useRef } from "react";
import RegisterHero from "./RegisterHero";
import RegisterOverview from "./RegisterOverview";
import RegisterOverviewLeft from "./RegisterOverviewLeft";
import RegisterForm from "./RegisterForm";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Register = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgLoaded2, setImgLoaded2] = useState(false);
  const formContainer = useRef();
  const { hash } = useLocation();

  useEffect(() => {
    // console.log(hash);
    imgLoaded && imgLoaded2 && hash === "#register"
      ? (formContainer.current.scrollIntoView({ behavior: "smooth" }),
        console.log("scrolled"))
      : "";
  }, [hash, imgLoaded, imgLoaded2]);

  return (
    <div>
      <Helmet title="Register" />
      <RegisterOverview {...{ imgLoaded, setImgLoaded }} />
      <RegisterOverviewLeft {...{ imgLoaded2, setImgLoaded2 }} />
      <div className="relative">
        <div id="register" className="absolute -mt-[35px] md:-mt-[60px]" ref={formContainer}></div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
