import { Helmet } from "react-helmet";
import RegisterComp from "../components/RegisterComp";
import SmallLoaderComp from "../components/SmallLoaderComp";

const ChangePassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daftar</title>
      </Helmet>

      <SmallLoaderComp />
      <RegisterComp />
    </>
  );
};

export default ChangePassword;
