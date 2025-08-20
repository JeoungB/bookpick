import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
    const navigate = useNavigate();

    const homeNavi = () => {
        navigate("/");
    };
  return (
    <>
      <h1 onClick={homeNavi} className="logo w-36 ml-6 flex items-center cursor-pointer fixed max-lg:ml-0">
        <img src={logo} alt="로고 이미지" className="w-20" />
        <p className="text-3xl font-bold text-blue-600 ">북픽</p>
      </h1>
    </>
  );
};

export default Logo;
