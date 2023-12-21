import Intro from "./Intro";
import Hero from "./Hero";
import Progress from "./Progress";

const Home = () => {
  return (
    <div>
      <Intro
        title={"Hi, i'm fortune. a student."}
        subtitle={
          "I'm passionate about crafting experiences that are engaging, accessible, and user-centric. I reflect the designs you imagine with lines of codes that clearly reflect your thoughts."
        }
      />
      <Hero />
      <Progress
        title={"In Progress"}
        subtitle={
          "These are a few of my works that are currently in progress. It's truly daunting to be a progrmmer by night and to be a science enthusiast by day, unleashing my creativity once a code a time."
        }
      />
    </div>
  );
};

export default Home;
