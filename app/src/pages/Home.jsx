import { useState , useEffect} from "react";
import BigLoaderComp from "../components/BigLoaderComp";
import HeaderComp from "../components/HeaderComp";
import SectionLandingComp from "../components/SectionLandingComp";
import SectionAboutUsComp from "../components/SectionAboutUsComp";
import SectionFeatureComp from "../components/SectionFeatureComp";
import SectionFooterComp from "../components/SectionFooterComp";


const Home = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    document.title = "Kaluna";
  }, [])

  return (
    <>
      <SectionLandingComp />
      <SectionAboutUsComp />
      <SectionFeatureComp />
      <SectionFooterComp />
      <BigLoaderComp onComplete={() => setLoaderComplete(!loaderComplete)} />
      <HeaderComp />
    </>
  );
};

export default Home;
