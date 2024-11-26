const MainFooterComp = () => {
  return (
    <>
      <div
        className="container-footer w-full flex justify-between items-center overflow-hidden h-14 px-12 relative gap-12 bg-primary"
        id="footer"
      >
        <div className="flex items-start gap-12">
          <div className="text-left text-colorbase text-sm">
            Copyright © 2024 All Rights Reserved - Kaluna Team&apos;s
          </div>
        </div>
        <div>
          <h1 className="text-3xl poppins-bold text-colorbase">
            Kalun<span className="text-secondary">a</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainFooterComp;
