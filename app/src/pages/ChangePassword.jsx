import { Helmet } from "react-helmet"
import ChangePasswordComp from "../components/ChangePasswordComp"
import SmallLoaderComp from "../components/SmallLoaderComp";

const ChangePassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ubah Password</title>
      </Helmet>

      <SmallLoaderComp />
      <ChangePasswordComp />
    </>
  );
};

export default ChangePassword;
