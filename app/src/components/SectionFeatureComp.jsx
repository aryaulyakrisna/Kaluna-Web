import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const SectionFeatureComp = () => {
  useEffect(() => {
    const srFeature = ScrollReveal({
      interval: 250,
      distance: "100px",
      duration: 750,
      delay: 1750,
      useDelay: "onload",
      reset: true, // animations repeat every time the element comes into view
    });

    srFeature.reveal(".reveal-left-feature", { origin: "left" });
    srFeature.reveal(".reveal-right-feature", {  origin: "right" });
  }, []);

  return (
    <div
      className="container-feature w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-primary px-12 py-32 relative"
      id="feature"
    >
      <h1 className="text-tertiary poppins-bold text-3xl after-title-underline relative reveal-right-feature">
        Fitur
      </h1>
      <div className="w-full max-w-4xl mt-12 text-primary grid gap-6">
        <div className="flex justify-center items-center gap-6 rounded-xl reveal-left-feature">
          <div className="container-img flex-1 rounded-xl h-full overflow-clip">
            <img
              src="/Transaction.jpg"
              alt="transaction"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="p-4 text-colorbase flex-1">
            <h2 className="mb-6 text-xl text-tertiary poppins-semibold">
              Transaksi Harian
            </h2>
            <p>
              Kelola keuangan sehari-hari tanpa repot! Fitur Transaksi Harian
              kami mempermudah Anda mencatat dan melacak setiap pengeluaran dan
              pemasukan. Semua data Anda disimpan dengan aman di satu platform,
              membuat Anda lebih mudah memahami aliran uang harian Anda. Kini,
              Anda bisa mengetahui ke mana uang Anda pergi tanpa kebingungan.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row-reverse gap-6 rounded-xl reveal-right-feature">
          <div className="container-img flex-1 rounded-xl h-full overflow-clip">
            <img
              src="/Planning.jpg"
              alt="planning"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="p-4 text-colorbase flex-1">
            <h2 className="mb-6 text-xl text-tertiary poppins-semibold">
              Perencanaan
            </h2>
            <p>
              Bangun masa depan finansial yang lebih baik! Fitur Perencanaan
              Keuangan membantu Anda membuat strategi keuangan yang efektif.
              Tentukan tujuan keuangan, susun anggaran, dan buat rencana
              pengeluaran yang sesuai dengan kebutuhan Anda. Dengan fitur ini,
              Anda bisa mengelola uang untuk kebutuhan saat ini sambil tetap
              mempersiapkan untuk masa depan.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 rounded-xl reveal-left-feature">
          <div className="container-img flex-1 rounded-xl h-full overflow-clip">
            <img
              src="/Monitoring.jpg"
              alt="monitoring"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="p-4 text-colorbase flex-1">
            <h2 className="mb-6 text-xl text-tertiary poppins-semibold">
              Laporan Keuangan
            </h2>
            <p>
              Pantau keuangan Anda dengan cerdas! Fitur Monitoring Keuangan
              memberikan laporan keuangan yang mendetail, membantu Anda memahami
              pola pengeluaran dan pemasukan. Dilengkapi dengan visualisasi data
              dan analisis, Anda bisa mengambil keputusan keuangan yang lebih
              bijak dan menjaga keseimbangan finansial dengan mudah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatureComp;
