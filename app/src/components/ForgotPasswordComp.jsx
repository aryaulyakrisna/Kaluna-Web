import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pageUrl from "../assets/pageUrl.json"

const ForgotPasswordComp = ({ showLogin }) => {
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const handleSetErrorText = (text) => {
    setErrorText(text);
  };
  

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    if (!loading) {
      setLoading(true);
  
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
  
      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_BASE_URL +
            "/" +
            import.meta.env.VITE_APP_GETOTP_URL,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.status == 200) {
          localStorage.setItem("email", JSON.stringify(data.email))
          navigate(pageUrl.link.changePassword, { state: { email: data.email } });
        }
      } catch (error) {
        const message = error.response.data.message;
        if (message == "Server Error") {
          handleSetErrorText("Mohon coba beberapa saat lagi.");
        } else if (message == "Email is not registered") {
          handleSetErrorText("Email tidak terdaftar.");
        }
      }
  
      setLoading(false);
    }
  };


  return (
    <div className="bg-colorbase shadow-2xl rounded-xl px-12 py-16 max-w-96 w-full border">
      <h1 className="text-4xl text-primary poppins-bold mb-6">
        Lupa Password <br />
        <span className="text-red-600 text-sm poppins-regular">
          {errorText}
        </span>
      </h1>
      <p className="text-sm text-black pb-6">
        Kami akan membantu Anda mengatur ulang password. Masukkan e-mail Anda
        agar kami dapat mengirimkan kode verifikasi (OTP).
      </p>
      <form onSubmit={handleForgotPassword}>
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="label-input">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="input-gray"
            placeholder="Ketik di sini"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white poppins-semibold py-3 rounded-lg hover:shadow-xl hover:opacity-90 active:scale-95 transition-all"
            disabled={loading}
          >
            {loading ? <span className="btn-loading-xs"></span> : "Kirim"}
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center mt-6">
          <button
            className="text-secondary font-medium hover:opacity-80 text-sm"
            onClick={showLogin}
          >
            Kembali masuk?
          </button>
        </div>
      </form>
    </div>
  );
};

ForgotPasswordComp.propTypes = {
  showLogin: PropTypes.func.isRequired,
};

export default ForgotPasswordComp;
