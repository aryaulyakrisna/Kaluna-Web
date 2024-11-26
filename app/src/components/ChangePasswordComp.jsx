import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pageUrl from "../assets/pageUrl.json";
import Swal from "sweetalert2";
import axios from "axios";

const LoginComp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [regexTest, setRegexTest] = useState(false);
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const { state } = location;
  const email = state?.email || JSON.parse(localStorage.getItem("email"));
  // console.log(email);
  if(!email) {
    window.location = pageUrl.link.home
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
    setRegexTest(regex.test(e.target.value));
  };

  const handleOTPCodeInput = (e) => {
    const value = e.target.value;

    // Prevent any char besides number are included
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const handleAlert = (alertProps) => {
    Swal.fire({
      title: alertProps.title,
      text: alertProps.text,
      icon: alertProps.icon,
      confirmButtonText: alertProps.confirmButtonText,
      customClass: {
        popup: alertProps.popup,
        confirmButton: alertProps.confirmButton,
      },
    }).then((result) => {
      if (alertProps.nextUrl && result.isConfirmed) {
        window.location.href = alertProps.nextUrl;
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();

    if (!loading && regexTest && password === confirmPassword) {
      setLoading(true);

      const formData = new FormData(event.target);
      const data = { ...Object.fromEntries(formData), email: email };

      // console.log(data);

      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_BASE_URL +
            "/" +
            import.meta.env.VITE_APP_CHANGEPASSWORD_URL,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status == 200) {
          localStorage.removeItem("email");
          
          handleAlert({
            title: "Berhasil!",
            text: "Berhasil merubah password.",
            icon: "success",
            popup: "my-popup",
            confirmButton: "my-success-button",
            confirmButtonText: "Masuk",
            nextUrl: pageUrl.link.login
          });
        }
      } catch (error) {
        const message = error.response.data.message;
        if (message == "Server Error") {
          handleAlert({
            title: "Gagal!",
            text: "Kesalahan ada di kami, mohon coba beberapa saat lagi.",
            icon: "error",
            popup: "my-popup",
            confirmButton: "my-error-button",
            confirmButtonText: "Ok",
          });
        } else if (message == "Invalid or expired OTP") {
          handleAlert({
            title: "Gagal!",
            text: "Kode OTP yang anda masukan salah atau sudah kadaluwarsa. Silahkan coba lagi.",
            icon: "error",
            popup: "my-popup",
            confirmButton: "my-error-button",
            confirmButtonText: "Ok",
          });
        }
      }

      setLoading(false);
    } else {
      handleAlert({
        title: "Peringatan!",
        text: "Tolong masukan semua data dengan benar.",
        icon: "warning",
        popup: "my-popup",
        confirmButton: "my-warning-button",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="bg-colorbase shadow-2xl rounded-xl px-12 py-16 max-w-[600px] w-full border">
      <h1 className="text-4xl text-primary poppins-bold mb-6">
        Ganti Password
      </h1>
      <p className="text-sm text-black pb-6">
        Cek inbox atau spam e-mail Anda, kami baru mengirimkan kode verifikasi
        (OTP) untuk melanjutkan pengaturan password. Kode OTP akan kadaluwarsa dalam 5 menit.
      </p>
      <form onSubmit={handleChangePassword}>
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="otp" className="label-input">
            Kode OTP (6)
          </label>
          <input
            required
            type="text"
            id="otp"
            name="otp"
            className="input-gray-otp"
            placeholder="000000"
            value={otp}
            onChange={handleOTPCodeInput}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="label-input">
            Password{" "}
            {!regexTest && password.length > 0 && (
              <span className="poppins-regular text-xs text-red-600">
                {"(6+ karakter, huruf besar, kecil, dan angka)"}
              </span>
            )}
          </label>
          <input
            required
            value={password}
            onChange={handleSetPassword}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="input-gray pr-10"
            placeholder="Ketik di sini"
          />
          <button
            type="button"
            className="absolute right-3 top-[2.75rem] text-gray hover-text-primary focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24.109 12.1444C24.0743 12.0685 23.2531 10.245 21.439 8.43095C19.0118 6.00751 15.9528 4.72595 12.5778 4.72595C9.20276 4.72595 6.1437 6.00751 3.71932 8.43095C1.90526 10.245 1.08401 12.0685 1.04651 12.1444C0.982998 12.2884 0.950195 12.444 0.950195 12.6014C0.950195 12.7588 0.982998 12.9145 1.04651 13.0585C1.0812 13.1353 1.90245 14.9578 3.71745 16.7719C6.1437 19.1953 9.20276 20.476 12.5778 20.476C15.9528 20.476 19.0118 19.1953 21.4353 16.7719C23.2503 14.9578 24.0715 13.1353 24.1062 13.0585C24.1702 12.9147 24.2034 12.7591 24.2039 12.6017C24.2044 12.4443 24.1721 12.2886 24.109 12.1444ZM19.7909 15.2381C17.7781 17.22 15.3518 18.226 12.5778 18.226C9.8037 18.226 7.37745 17.22 5.36745 15.2372C4.57652 14.4546 3.89617 13.5677 3.34526 12.601C3.89633 11.6346 4.57667 10.748 5.36745 9.96564C7.37839 7.98189 9.8037 6.97595 12.5778 6.97595C15.3518 6.97595 17.7771 7.98189 19.7881 9.96564C20.5789 10.748 21.2593 11.6346 21.8103 12.601C21.2593 13.5676 20.5789 14.4545 19.7881 15.2372L19.7909 15.2381ZM12.5778 8.47595C11.7619 8.47595 10.9644 8.71788 10.286 9.17114C9.60768 9.6244 9.07897 10.2686 8.76676 11.0224C8.45455 11.7761 8.37286 12.6055 8.53202 13.4057C8.69119 14.2059 9.08405 14.9409 9.66095 15.5178C10.2378 16.0947 10.9728 16.4875 11.773 16.6467C12.5732 16.8059 13.4026 16.7242 14.1563 16.412C14.9101 16.0997 15.5543 15.571 16.0076 14.8927C16.4608 14.2143 16.7028 13.4168 16.7028 12.601C16.7015 11.5073 16.2665 10.4588 15.4932 9.68551C14.7199 8.91219 13.6714 8.47719 12.5778 8.47595ZM12.5778 14.476C12.2069 14.476 11.8444 14.366 11.5361 14.16C11.2277 13.9539 10.9874 13.6611 10.8455 13.3185C10.7036 12.9759 10.6664 12.5989 10.7388 12.2352C10.8111 11.8714 10.9897 11.5374 11.2519 11.2751C11.5142 11.0129 11.8483 10.8343 12.212 10.762C12.5757 10.6896 12.9527 10.7268 13.2953 10.8687C13.6379 11.0106 13.9307 11.2509 14.1368 11.5593C14.3428 11.8676 14.4528 12.2301 14.4528 12.601C14.4528 13.0982 14.2552 13.5751 13.9036 13.9268C13.552 14.2784 13.075 14.476 12.5778 14.476Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.91026 3.59436C5.81147 3.483 5.69155 3.39235 5.55746 3.32767C5.42337 3.26299 5.27778 3.22556 5.12912 3.21757C4.98047 3.20957 4.8317 3.23116 4.69145 3.28108C4.5512 3.331 4.42225 3.40826 4.31207 3.50838C4.2019 3.60851 4.11269 3.7295 4.04963 3.86435C3.98656 3.99921 3.95088 4.14524 3.94467 4.29398C3.93846 4.44272 3.96182 4.59122 4.01342 4.73086C4.06502 4.87051 4.14382 4.99852 4.24526 5.10749L5.74526 6.76217C2.51557 8.9128 1.11401 11.999 1.04651 12.1444C0.982998 12.2884 0.950195 12.444 0.950195 12.6014C0.950195 12.7588 0.982998 12.9144 1.04651 13.0584C1.0812 13.1353 1.90245 14.9578 3.71745 16.7719C6.1437 19.1953 9.20276 20.4759 12.5778 20.4759C14.218 20.485 15.8436 20.1663 17.359 19.5384L19.2424 21.6103C19.4442 21.827 19.7231 21.9554 20.0189 21.9678C20.3147 21.9801 20.6034 21.8754 20.8225 21.6763C21.0416 21.4772 21.1733 21.1998 21.1893 20.9042C21.2052 20.6086 21.1039 20.3186 20.9074 20.0972L5.91026 3.59436ZM12.5778 18.2259C9.8037 18.2259 7.37745 17.22 5.36745 15.2372C4.57681 14.4543 3.8965 13.5674 3.34526 12.6009C3.83932 11.7281 5.10682 9.7978 7.28276 8.44874L15.7287 17.7403C14.7101 18.0655 13.647 18.2294 12.5778 18.2259ZM24.109 13.0584C24.0753 13.1344 23.2653 14.9334 21.484 16.7297C21.382 16.8429 21.2581 16.9342 21.1197 16.9981C20.9814 17.062 20.8315 17.0971 20.6791 17.1013C20.5268 17.1054 20.3752 17.0786 20.2335 17.0225C20.0919 16.9663 19.9631 16.882 19.855 16.7745C19.747 16.6671 19.6618 16.5388 19.6048 16.3975C19.5478 16.2561 19.5201 16.1047 19.5234 15.9524C19.5267 15.8 19.5609 15.6499 19.624 15.5112C19.6871 15.3724 19.7776 15.248 19.8903 15.1453C20.6385 14.3845 21.284 13.5292 21.8103 12.6009C21.2593 11.6342 20.579 10.7473 19.7881 9.96467C17.7771 7.98186 15.3518 6.97592 12.5778 6.97592C12.2637 6.97592 11.9496 6.98905 11.6403 7.0153C11.4912 7.03127 11.3404 7.01728 11.1968 6.97415C11.0532 6.93101 10.9197 6.85961 10.8041 6.76413C10.6884 6.66865 10.5931 6.55103 10.5236 6.41817C10.4541 6.28531 10.4118 6.13989 10.3993 5.99048C10.3868 5.84106 10.4043 5.69065 10.4508 5.54809C10.4973 5.40553 10.5718 5.27369 10.6699 5.16034C10.768 5.04698 10.8879 4.95438 11.0223 4.88799C11.1567 4.8216 11.3031 4.78275 11.4528 4.77374C11.8212 4.74186 12.2028 4.72592 12.5778 4.72592C15.9528 4.72592 19.0118 6.00749 21.4362 8.43092C23.2503 10.245 24.0715 12.0684 24.1062 12.1444C24.1702 12.2882 24.2034 12.4437 24.2039 12.6011C24.2044 12.7585 24.1721 12.9142 24.109 13.0584Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4 relative">
          <label htmlFor="confirm_password" className="label-input">
            Confirm Password{" "}
            {password != confirmPassword && confirmPassword.length > 0 && (
              <span className="poppins-regular text-xs text-red-600">
                {"(password tidak cocok)"}
              </span>
            )}
          </label>
          <input
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            className="input-gray pr-10"
            placeholder="Ketik di sini"
          />
          <button
            type="button"
            className="absolute right-3 top-[2.75rem] text-gray hover-text-primary focus:outline-none"
            onClick={toggleConfirmNewPasswordVisibility}
          >
            {showConfirmPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24.109 12.1444C24.0743 12.0685 23.2531 10.245 21.439 8.43095C19.0118 6.00751 15.9528 4.72595 12.5778 4.72595C9.20276 4.72595 6.1437 6.00751 3.71932 8.43095C1.90526 10.245 1.08401 12.0685 1.04651 12.1444C0.982998 12.2884 0.950195 12.444 0.950195 12.6014C0.950195 12.7588 0.982998 12.9145 1.04651 13.0585C1.0812 13.1353 1.90245 14.9578 3.71745 16.7719C6.1437 19.1953 9.20276 20.476 12.5778 20.476C15.9528 20.476 19.0118 19.1953 21.4353 16.7719C23.2503 14.9578 24.0715 13.1353 24.1062 13.0585C24.1702 12.9147 24.2034 12.7591 24.2039 12.6017C24.2044 12.4443 24.1721 12.2886 24.109 12.1444ZM19.7909 15.2381C17.7781 17.22 15.3518 18.226 12.5778 18.226C9.8037 18.226 7.37745 17.22 5.36745 15.2372C4.57652 14.4546 3.89617 13.5677 3.34526 12.601C3.89633 11.6346 4.57667 10.748 5.36745 9.96564C7.37839 7.98189 9.8037 6.97595 12.5778 6.97595C15.3518 6.97595 17.7771 7.98189 19.7881 9.96564C20.5789 10.748 21.2593 11.6346 21.8103 12.601C21.2593 13.5676 20.5789 14.4545 19.7881 15.2372L19.7909 15.2381ZM12.5778 8.47595C11.7619 8.47595 10.9644 8.71788 10.286 9.17114C9.60768 9.6244 9.07897 10.2686 8.76676 11.0224C8.45455 11.7761 8.37286 12.6055 8.53202 13.4057C8.69119 14.2059 9.08405 14.9409 9.66095 15.5178C10.2378 16.0947 10.9728 16.4875 11.773 16.6467C12.5732 16.8059 13.4026 16.7242 14.1563 16.412C14.9101 16.0997 15.5543 15.571 16.0076 14.8927C16.4608 14.2143 16.7028 13.4168 16.7028 12.601C16.7015 11.5073 16.2665 10.4588 15.4932 9.68551C14.7199 8.91219 13.6714 8.47719 12.5778 8.47595ZM12.5778 14.476C12.2069 14.476 11.8444 14.366 11.5361 14.16C11.2277 13.9539 10.9874 13.6611 10.8455 13.3185C10.7036 12.9759 10.6664 12.5989 10.7388 12.2352C10.8111 11.8714 10.9897 11.5374 11.2519 11.2751C11.5142 11.0129 11.8483 10.8343 12.212 10.762C12.5757 10.6896 12.9527 10.7268 13.2953 10.8687C13.6379 11.0106 13.9307 11.2509 14.1368 11.5593C14.3428 11.8676 14.4528 12.2301 14.4528 12.601C14.4528 13.0982 14.2552 13.5751 13.9036 13.9268C13.552 14.2784 13.075 14.476 12.5778 14.476Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.91026 3.59436C5.81147 3.483 5.69155 3.39235 5.55746 3.32767C5.42337 3.26299 5.27778 3.22556 5.12912 3.21757C4.98047 3.20957 4.8317 3.23116 4.69145 3.28108C4.5512 3.331 4.42225 3.40826 4.31207 3.50838C4.2019 3.60851 4.11269 3.7295 4.04963 3.86435C3.98656 3.99921 3.95088 4.14524 3.94467 4.29398C3.93846 4.44272 3.96182 4.59122 4.01342 4.73086C4.06502 4.87051 4.14382 4.99852 4.24526 5.10749L5.74526 6.76217C2.51557 8.9128 1.11401 11.999 1.04651 12.1444C0.982998 12.2884 0.950195 12.444 0.950195 12.6014C0.950195 12.7588 0.982998 12.9144 1.04651 13.0584C1.0812 13.1353 1.90245 14.9578 3.71745 16.7719C6.1437 19.1953 9.20276 20.4759 12.5778 20.4759C14.218 20.485 15.8436 20.1663 17.359 19.5384L19.2424 21.6103C19.4442 21.827 19.7231 21.9554 20.0189 21.9678C20.3147 21.9801 20.6034 21.8754 20.8225 21.6763C21.0416 21.4772 21.1733 21.1998 21.1893 20.9042C21.2052 20.6086 21.1039 20.3186 20.9074 20.0972L5.91026 3.59436ZM12.5778 18.2259C9.8037 18.2259 7.37745 17.22 5.36745 15.2372C4.57681 14.4543 3.8965 13.5674 3.34526 12.6009C3.83932 11.7281 5.10682 9.7978 7.28276 8.44874L15.7287 17.7403C14.7101 18.0655 13.647 18.2294 12.5778 18.2259ZM24.109 13.0584C24.0753 13.1344 23.2653 14.9334 21.484 16.7297C21.382 16.8429 21.2581 16.9342 21.1197 16.9981C20.9814 17.062 20.8315 17.0971 20.6791 17.1013C20.5268 17.1054 20.3752 17.0786 20.2335 17.0225C20.0919 16.9663 19.9631 16.882 19.855 16.7745C19.747 16.6671 19.6618 16.5388 19.6048 16.3975C19.5478 16.2561 19.5201 16.1047 19.5234 15.9524C19.5267 15.8 19.5609 15.6499 19.624 15.5112C19.6871 15.3724 19.7776 15.248 19.8903 15.1453C20.6385 14.3845 21.284 13.5292 21.8103 12.6009C21.2593 11.6342 20.579 10.7473 19.7881 9.96467C17.7771 7.98186 15.3518 6.97592 12.5778 6.97592C12.2637 6.97592 11.9496 6.98905 11.6403 7.0153C11.4912 7.03127 11.3404 7.01728 11.1968 6.97415C11.0532 6.93101 10.9197 6.85961 10.8041 6.76413C10.6884 6.66865 10.5931 6.55103 10.5236 6.41817C10.4541 6.28531 10.4118 6.13989 10.3993 5.99048C10.3868 5.84106 10.4043 5.69065 10.4508 5.54809C10.4973 5.40553 10.5718 5.27369 10.6699 5.16034C10.768 5.04698 10.8879 4.95438 11.0223 4.88799C11.1567 4.8216 11.3031 4.78275 11.4528 4.77374C11.8212 4.74186 12.2028 4.72592 12.5778 4.72592C15.9528 4.72592 19.0118 6.00749 21.4362 8.43092C23.2503 10.245 24.0715 12.0684 24.1062 12.1444C24.1702 12.2882 24.2034 12.4437 24.2039 12.6011C24.2044 12.7585 24.1721 12.9142 24.109 13.0584Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white poppins-semibold py-3 rounded-lg hover:shadow-xl hover:opacity-90 active:scale-95 transition-all"
          >
            Kirim
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center mt-6">
          <Link
            to={pageUrl.link.login}
            className="text-secondary hover:opacity-80 text-sm"
          >
            Kembali Masuk?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
