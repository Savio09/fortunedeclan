import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import img1 from "../../images/profile.png";
const Beach = ({
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
          navigate("/notes");
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
        <i>
          Fixing her gaze on Dylan, she softly said, "You have a good memory,"
          as she gently caressed her white ceramic bowl after finishing a meal
          of processed food.
        </i>
        <br />
        <br />
        {paragraph1}
        <br /> <br />
      </p>
      <p style={{ lineHeight: "2" }}>
        "No, I don't," she said. "I attend school in another county, but I'll be
        staying here over the summer for my internship."
        <br />
        <br />
        "Oh! Wow! That's exciting," Dylan replied. "Where?" She mentioned a firm
        renowned worldwide.
        <br />
        <br />
        "You?" she asked.
        <br />
        <br />
        Dylan hesitated, aiming to preserve an air of mystery. "It's better if
        you don't know," he said with a slight grin. "But it's related to
        computer science," he added, offering just enough to let her imagination
        roam.
        <br />
        <br />
        “You’re with the F.B.I?” she asked. Dylan smirked. “I’m sorry that’s all
        the information I can give you.”
        <br />
        <br />
        “Okay, got it!” she said.
        <br />
        <br />
        "Well, it was a pleasure meeting you, Olivine. See you later," he said,
        turning to Daria. Just then, someone moved past his peripheral vision.
      </p>
      <br />
      <p>
        {paragraph2}
        <br /> <br />
      </p>
      <p>
        Finally, it was over.
        <br /> <br />
        His breath steadied as he approached the stairs. Dylan had once lived on
        the third floor, but circumstances had pushed him up to the fifth,
        adding two more flights to his ascent. At his door, indifferent to
        anyone nearby, he slid the key into the rusty lock, turned it gently,
        and grasped the doorknob—the cold metal sending a tingling chill through
        his hand.
        <br /> <br />
        Inside the room and inside his mind, Dylan began to question all the
        introductions he'd just made. He was at war with himself: one part
        longed for peace and quiet, to block out the noise around him and
        retreat into isolation; the other part recalled from the few books he'd
        read the benefits of social interactions, especially in the world he
        inhabited. After much internal wrestling, he slipped off his shoes, took
        a cold shower, and slid beneath the fluffy blanket he'd retrieved from
        storage.
      </p>
      <br />
      <p>
        {paragraph3}
        <br /> <br />
      </p>
      <p style={{ lineHeight: "2" }}>
        What is that red stuff in the bottle?" she asked, her eyes wide with
        curiosity.
        <br />
        <br />
        Dylan could barely hear her; his earbuds were in, music playing just
        loud enough to muffle most sounds. However, thanks to the conversation
        awareness feature, some words filtered through. He turned around.
        "Sorry, what did you say?"
        <br />
        <br />
        "Is that blood or something?" she repeated, pointing at the bottle.
        <br />
        <br />
        "Oh! No," Dylan replied with a chuckle. "It's called red palm oil. It's
        native to where I'm from—think of it as a type of vegetable oil made
        from palm kernels."
        <br />
        <br />
        "Interesting!" she said, reaching to grab the electric kettle. She tried
        to turn it on but frowned. "Oh no! It's not working," she murmured.
        <br />
        <br />
        This time, Dylan heard her clearly; he had already pocketed his earbuds
        in their sleek charging case.
      </p>
    </m.div>
  );
};

export default Beach;
