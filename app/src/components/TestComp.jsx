import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const TestComp = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      // origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: true, // animations repeat every time the element comes into view
    });

    sr.reveal(".reveal");
  }, []);

  return (
    <div>
      <h1 className="reveal">ScrollReveal in React</h1>
      <p className="reveal">
        This paragraph will appear with a scrolling effect.
      </p>
      <div className="reveal">
        <button>Click Me</button>
      </div>
    </div>
  );
};

export default TestComp;
