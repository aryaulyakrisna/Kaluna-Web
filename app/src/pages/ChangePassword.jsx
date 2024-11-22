import { useEffect } from "react";
import ChangePasswordComp from "../components/ChangePasswordComp"
import SmallLoaderComp from "../components/SmallLoaderComp";

const ChangePassword = () => {
  useEffect(() => {
    document.title = "Ubah Password";
  }, [])

  return (
    <>
      <SmallLoaderComp />
      <ChangePasswordComp />
    </>
  );
};

export default ChangePassword;
