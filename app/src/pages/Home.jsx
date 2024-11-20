import { Helmet } from "react-helmet";
import { useState } from "react";
import BigLoaderComp from "../components/BigLoaderComp";
import HeaderComp from "../components/HeaderComp";
import SectionLandingComp from "../components/SectionLandingComp";
import SectionAboutUsComp from "../components/SectionAboutUsComp";
import SectionFeatureComp from "../components/SectionFeatureComp";
import SectionFooterComp from "../components/SectionFooterComp";


const Home = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kaluna</title>
      </Helmet>

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
