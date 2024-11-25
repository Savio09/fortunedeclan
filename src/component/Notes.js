import Intro from "./Intro";
import { Link, Outlet } from "react-router-dom";

const Notes = () => {
  const storyInformation = [
    {
      title: "The Jewel Beach",
      subtitle: "Self discovery: Part 1",
      icon: "diamond",
      link: "jewel-cove",
    },
    {
      title: "The Utopian Vision",
      subtitle: "A short fictional story about a utopic society",
      icon: "guardian",
      link: "utopia",
    },
    {
      title: "Positive Psychology",
      subtitle: "A compilation of the notes I took on Positive Psychology!",
      icon: "psychology_alt",
      link: "pos-psychology",
    },
  ];
  return (
    <div className="outer">
      <Intro title={"Notes."} />
      <div>
        <div className="story-list">
          {storyInformation.map((story, index) => (
            <Link className="stories" to={story.link} key={index}>
              <div className="highlight">
                <h3>{story.title}</h3>
                <p>{story.subtitle}</p>
              </div>

              <span class="material-symbols-outlined">{story.icon}</span>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Notes;
