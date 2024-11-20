import LottieComp from "../components/LottieComp";
import BussinessLottie from "../assets/business-analysis-presentation.json"
import HeaderComp from "../components/HeaderComp";
import TestComp from "../components/TestComp";

const Test = () => {
  return (
    <>
      <HeaderComp />
      <LottieComp lottieJson={BussinessLottie} classStyle={"w-96"} />
      <TestComp />
    </>
  );
}

export default Test