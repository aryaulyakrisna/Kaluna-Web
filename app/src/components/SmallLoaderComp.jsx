import { useState, useRef, useEffect } from "react";

const BigLoaderComp = () => {
  const isLoaded = useRef(false); // Gunakan default false
  const [addZeroOpacity, setAddZeroOpacity] = useState(false);
  const [moveBigLoader, setMoveBigLoader] = useState(false);

  function handleMoveBigLoader() {
    setTimeout(() => setAddZeroOpacity(!addZeroOpacity), 750); // set big loader to zero opacity
    setTimeout(() => setMoveBigLoader(!moveBigLoader), 1500); // move out big loader from window
  }

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true; 
      handleMoveBigLoader(); 
    }
  }, []); // empty array will make useEffect runs only one time 

  return (
    <>
      {!moveBigLoader ? (
        <div
          className={`w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-primary transition delay-250 duration-[500ms} ${
            addZeroOpacity ? "opacity-0" : ""
          }`}
        >
          <span
            className={`loader loading loading-spinner text-secondary transition duration-500 ${
              addZeroOpacity ? "opacity-0" : ""
            }`}
          ></span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BigLoaderComp;
