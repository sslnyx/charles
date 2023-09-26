import { useLocation } from "react-router-dom";

const RegisterBtn = ({ closeMainMenu }) => {
  const { pathname } = useLocation();

  return (
    <a
      target={pathname === "/register" ? "_self" : "_blank"}
      onClick={() => closeMainMenu()}
      href="/register#register"
      className="relative z-10"
    >
      <div className="text-center border-[3px] rounded-[17px] px-2 py-2 md:px-5 md:py-2 text-base md:text-2xl font-[500] text-bwhite font-serif">
        REGISTER
      </div>
    </a>
  );
};

export default RegisterBtn;
