import { useEffect, useState } from "react";
import LoginComp from "../components/LoginComp";
import ForgotPasswordComp from "../components/ForgotPasswordComp";
import SmallLoaderComp from "../components/SmallLoaderComp";

const Login = () => {
  const [toForgotPassword, setToForgotPassword] = useState(false);

  function moveToForgotPassword() {
    setToForgotPassword(!toForgotPassword);
  }

  useEffect(() => {
    document.title = toForgotPassword? "Lupa Password" : "Masuk" 
  }, [toForgotPassword])

  return (
    <>
      <SmallLoaderComp />

      {toForgotPassword ? (
        <ForgotPasswordComp showLogin={moveToForgotPassword} />
      ) : (
        <LoginComp toForgotPassword={moveToForgotPassword} />
      )}
    </>
  );
};

export default Login;
