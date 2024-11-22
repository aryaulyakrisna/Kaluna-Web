// import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import Swal from "sweetalert2";

const TestComp = () => {
  function handleClick() {
    Swal.fire({
      title: "Sukses!",
      text: "Anda berhasil mendaftar.",
      icon: "error",
      customClass: {
        popup: "my-popup",
        confirmButton: "my-error-button",
      },
    })
  }
  return <button onClick={handleClick}>Open</button>;
};

export default TestComp;
