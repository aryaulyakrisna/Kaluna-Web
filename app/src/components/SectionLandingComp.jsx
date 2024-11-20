import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import pageUrl from "../assets/pageUrl.json";
import SavingMoney from "../assets/saving-money.json";
import ShinyStar from "../assets/shiny-star.json";

import LottieComp from "./LottieComp";

const SectionLandingComp = () => {

  useEffect(() => {
    const srLanding = ScrollReveal({
      distance: "100px",
      duration: 750,
      delay: 1750,
      useDelay: "onload",
      reset: true, // animations repeat every time the element comes into view
    });

    srLanding.reveal(".reveal-left-landing", { interval: 250, origin: "left" });
    srLanding.reveal(".reveal-bottom-landing", { interval: 250, origin: "bottom"});
  }, [])

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-primary relative px-12"
      id="home"
    >
      <LottieComp
        src={SavingMoney}
        classStyle={
          "absolute w-60 bottom-20 right-20 z-[8] rotate-[-15deg] reveal-bottom-landing"
        }
      />

      <LottieComp
        src={ShinyStar}
        classStyle={"absolute w-32 top-32 left-32 z-[8] reveal-bottom-landing"}
      />

      <LottieComp
        src={ShinyStar}
        classStyle={
          "absolute w-20 bottom-20 left-32 z-[8] reveal-bottom-landing"
        }
      />

      <LottieComp
        src={ShinyStar}
        classStyle={"absolute w-20 bottom-30 right-20 z-[8] rotate-[-15deg]"}
      />

      <div className="max-w-4xl z-[9]">
        <h2 className="text-6xl text-colorbase mb-12 poppins-bold text-tertiary reveal-left-landing">
          <span className="text-secondary">K</span>amu{" "}
          <span className="text-secondary">A</span>kan{" "}
          <span className="text-secondary">L</span>ebih{" "}
          <span className="text-secondary">U</span>ntung dengan{" "}
          <span className="text-secondary">N</span>avigasi{" "}
          <span className="text-secondary">A</span>nggaran
        </h2>
        <p className="text-colorbase pb-12 reveal-left-landing">
          Kelola anggaranmu dengan lebih mudah dan terencana! Kami hadir untuk
          membantumu memantau pengeluaran, mengatur prioritas keuangan, dan
          mencapai tujuan finansialmu.
        </p>
        <Link to={pageUrl.link.register} className="block reveal-left-landing ">
          <p className="px-3 py-2 border-colorbase rounded-lg poppins-semibold text-lg text-colorbase hover:text-[#004225] transition-all hover:bg-[#F5F5DC] inline">
            Ayo mulai!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SectionLandingComp;
