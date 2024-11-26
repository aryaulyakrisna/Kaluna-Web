import { Link } from "react-router-dom";
import pageUrl from "../assets/pageUrl.json";

const MainHeaderComp = () => {

  return (
    <div
      className="container-header w-full h-14 flex justify-between gap-6 px-12 items-center fixed top-0 left-0 z-10 transition duration-300 bg-primary shadow-2xl"
    >
      <Link
        className="block text-3xl poppins-bold text-colorbase reveal-top"
        to={pageUrl.link.home}
      >
        Kalun<span className="text-secondary">a</span>
      </Link>
      <div className="flex gap-12 items-center reveal-top">
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#dashboard"
        >
          Dasbor
        </a>
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#transaction"
        >
          Transaksi
        </a>
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#budget"
        >
          Anggaran
        </a>
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#report"
        >
          Laporan
        </a>
      </div>
      <button className="avatar online placeholder active:scale-90 transition-all">
        <div className="bg-secondary text-primary poppins-semibold w-10 rounded-full">
          <span className="text-xl">K</span>
        </div>
      </button>
    </div>
  );
};

export default MainHeaderComp;
