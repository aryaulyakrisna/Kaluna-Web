import { useState } from "react";
import { Helmet } from "react-helmet";
import LoginComp from "../components/LoginComp";
import ForgotPasswordComp from "../components/ForgotPasswordComp";
import SmallLoaderComp from "../components/SmallLoaderComp";

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  
  function moveToForgotPassword() {
    setShowForgotPassword(!showForgotPassword);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{showForgotPassword ? "Lupa Password" : "Masuk"}</title>
      </Helmet>

      <SmallLoaderComp />

      {showForgotPassword ? (
        <ForgotPasswordComp showLogin={moveToForgotPassword} />
      ) : (
        <LoginComp showForgotPassword={moveToForgotPassword} />
      )}
    </>
  );
};

export default Login;
