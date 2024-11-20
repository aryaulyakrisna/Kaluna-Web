import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import LottieComp from "./LottieComp";
import ShinyStar from "../assets/shiny-star.json";

const SectionAboutUsComp = () => {
  useEffect(() => {
    const srAboutUs = ScrollReveal({ // you need to change the name of variable if the component's called in the same page
      distance: "100px",
      duration: 750,
      delay: 1750,
      useDelay: "onload",
      reset: true // animations repeat every time the element comes into view
    });

    srAboutUs.reveal(".reveal-left-aboutus", { interval: 250, origin: "left" });
    srAboutUs.reveal(".reveal-bottom-aboutus", {
      interval: 150,
      origin: "bottom"
    });
    srAboutUs.reveal(".reveal-right-aboutus", {
      interval: 150,
      origin: "right"
    });
  }, []);

  return (
    <div
      className="container-aboutus w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-tertiary px-12 py-32 relative"
      id="about_us"
    >
      <LottieComp
        src={ShinyStar}
        classStyle={"absolute w-32 top-24 left-48 z-[8] reveal-bottom-aboutus"}
      />

      <LottieComp
        src={ShinyStar}
        classStyle={
          "absolute w-40 bottom-20 right-48 z-[8] reveal-bottom-aboutus"
        }
      />
      <LottieComp
        src={ShinyStar}
        classStyle={
          "absolute w-20 bottom-20 right-32 z-[8] reveal-bottom-aboutus"
        }
      />

      <h1 className="text-primary poppins-bold text-3xl after-title-underline relative reveal-right-aboutus">
        Tentang Kalun<span className="text-secondary">a</span>
      </h1>
      <div className="w-full max-w-4xl mt-12 text-primary">
        <h2 className="text-2xl poppins-bold reveal-left-aboutus">Halo 👋</h2>
        <div className="text-lg mt-6 reveal-left-aboutus">
          <p>
            Selamat datang di Kaluna, aplikasi manajemen keuangan interaktif
            yang dibuat khusus untuk kamu yang merasa{" "}
            <span className="text-red-600">&quot;keuangan itu ribet&quot;</span>
            ! Kami tahu nggak semua orang punya kebiasaan mencatat atau memantau
            uang yang keluar-masuk, dan itulah kenapa Kaluna hadir, untuk bikin
            perjalanan finansialmu jadi simpel, seru, dan nggak bikin pusing.
          </p>
          <p className="poppins-bold text-2xl mt-6 reveal-left-aboutus">Apa itu Kaluna?</p>
          <p className="mt-6 max-w-lg reveal-left-aboutus">
            Singkatnya,{" "}
            <span className="text-green-600">
              Kontrol Anggaran, Lacak Uang, Navigasi Akun
            </span>
            —tapi buat kamu, itu berarti:
          </p>
          <ul
            className="list-none mt-6 space-y-4 text-gray-800 pl-6"
            id="container_list"
          >
            <li className="reveal-right-aboutus flex items-start">
              <span className="text-green-600 font-bold mr-2 block">✔</span>
              Pantau pengeluaranmu tanpa ribet.
            </li>
            <li className="reveal-right-aboutus flex items-start">
              <span className="text-green-600 font-bold mr-2 block">✔</span>
              Susun anggaran yang realistis dan gampang dijalani.
            </li>
            <li className="reveal-right-aboutus flex items-start">
              <span className="text-green-600 font-bold mr-2 block">✔</span>
              Capai tujuan finansialmu dengan panduan yang seru.
            </li>
          </ul>
          <p className="mt-6 reveal-left-aboutus">
            Misi kami bantu kamu keluar dari{" "}
            <span className="text-red-600">
              &quot;keuangan berantakan&quot;
            </span>{" "}
            dan bikin hidup lebih tenang. Nggak perlu jadi ahli keuangan, cukup
            jadi diri sendiri dan biarkan Kaluna jadi partner finansialmu. Yuk,
            kendalikan uangmu dan raih kebebasan finansial mulai hari ini.
            Dengan Kaluna, kamu siap melangkah ke masa depan yang lebih cerah,
            satu anggaran di satu waktu. ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutUsComp;
