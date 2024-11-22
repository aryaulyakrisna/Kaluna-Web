import { useEffect } from "react";
import RegisterComp from "../components/RegisterComp";
import SmallLoaderComp from "../components/SmallLoaderComp";

const ChangePassword = () => {
  useEffect(() => {
    document.title = "Daftar";
  }, [])

  return (
    <>
      <SmallLoaderComp />
      <RegisterComp />
    </>
  );
};

export default ChangePassword;
