const SectionFooterComp = () => {

  return (
    <>
      <div className="w-full py-6 bg-colorbase text-center text-gray">
        Copyright © 2024 All Rights Reserved - Kaluna Team&apos;s
      </div>
      <div
        className="container-footer w-full flex justify-between items-start overflow-hidden px-24 py-24 relative gap 12 bg-primary"
        id="footer"
      >
        <div className="flex items-start gap-12">
          <div className="flex flex-col gap-1">
            <h1 className="poppins-semibold text-colorbase">Pengenalan</h1>
            <a className="pointer text-gray text-xs" href="#home">
              Halaman Depan
            </a>
            <a className="pointer text-gray text-xs" href="#about_us">
              Tentang Kami
            </a>
            <a className="pointer text-gray text-xs" href="#Feature">
              Fitur
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="poppins-semibold text-colorbase">
              Memperkenalkan Tim Kami
            </h1>
            <a className="pointer text-gray text-xs" href="/">
              Arya Ulya Krisna
            </a>
            <a className="pointer text-gray text-xs" href="/">
              Firda Humaira
            </a>
            <a className="pointer text-gray text-xs" href="/">
              Kartika Sari
            </a>
            <a className="pointer text-gray text-xs" href="/">
              Nabila Alawiyah
            </a>
            <a className="pointer text-gray text-xs" href="/">
              Raka Satria Efendi
            </a>
            <a className="pointer text-gray text-xs" href="/">
              Rizki Muhammad Syamsi
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-5xl poppins-bold text-colorbase">
            Kalun<span className="text-secondary">a</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default SectionFooterComp;
