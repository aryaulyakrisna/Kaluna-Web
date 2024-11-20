import PropTypes from "prop-types";

const ForgotPasswordComp = ({ showLogin }) => {
  return (
    <div className="bg-colorbase shadow-2xl rounded-xl px-12 py-16 max-w-96 w-full border">
      <h1 className="text-4xl text-primary poppins-bold mb-6">
        Lupa Password
      </h1>
      <p className="text-sm text-black pb-6">
        Kami akan membantu Anda mengatur ulang password. Masukkan e-mail Anda
        agar kami dapat mengirimkan kode verifikasi (OTP).
      </p>
      <form>
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="label-input">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            className="input-gray"
            placeholder="Ketik di sini"
          />
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
          <button
            className="text-secondary font-medium hover:opacity-80 text-sm"
            onClick={showLogin}
          >
            Kembali Masuk?
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
