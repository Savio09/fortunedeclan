import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import img1 from "../../images/profile.png";
const Utopia = ({
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  title,
  time,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let storyList = document.querySelector(".story-list");
    let bigText = document.querySelector(".outer .intro-section");
    if (storyList && bigText) {
      storyList.style.visibility = "hidden";
      bigText.style.visibility = "hidden";
    }

    // Re-enable body scroll when component unmounts
    return () => {
      document.body.style.overflow = "";

      // Check if the element still exists before trying to access its style
      if (storyList && bigText) {
        storyList.style.visibility = "";
        bigText.style.visibility = "";
      }
    };
  }, []);

  // The else block was excluded because the following line is supposed to run if the modal is open
  return (
    <m.div
      className="modal"
      initial={{ y: "100%", x: "-50%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <span class="material-symbols-outlined">close</span>
      </button>
      <div className="titlebar">
        <h1>{title}</h1>
        <div className="img-col">
          <img src={img1} alt="" />
          <p> {time}</p>
        </div>
      </div>

      <br />
      <br />
      <p>
        {paragraph1}
        <br /> <br />
        {paragraph2}
        <br /> <br />
        {paragraph3}
        <br /> <br />
        {paragraph4}
      </p>
    </m.div>
  );
};

export default Utopia;
