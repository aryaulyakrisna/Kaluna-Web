// import LottieComp from "../components/LottieComp";
// import BussinessLottie from "../assets/business-analysis-presentation.json"
import { useNavigate } from "react-router-dom";
import HeaderComp from "../components/HeaderComp";
import TestComp from "../components/TestComp";
import { useEffect } from "react";

const Test = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login", { state: { key: "value" } });
  }, [])
  
  return (
    <>
      <HeaderComp />
      {/* <LottieComp lottieJson={BussinessLottie} classStyle={"w-96"} /> */}
      <TestComp />
    </>
  );
}

export default Test