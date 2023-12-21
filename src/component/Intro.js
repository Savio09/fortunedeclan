import { motion as m } from "framer-motion";
const Intro = ({ title, subtitle }) => {
  return (
    <div className="intro-section">
      <m.h1
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </m.h1>
      <m.p
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </m.p>
    </div>
  );
};

export default Intro;
