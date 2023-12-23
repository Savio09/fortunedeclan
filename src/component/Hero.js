import img1 from "../images/hero-2.png";
import img2 from "../images/hero-1.png";
import img3 from "../images/hero-3.png";
import img4 from "../images/snap.png";
const Hero = () => {
  return (
    <div className="grid">
      <a
        href="https://word-archive-230b8ddc4762.herokuapp.com/"
        className="grid-item-1"
      >
        <div className="grid-item">
          <div className="organization">
            <p>AI + Code</p>
            <h1>Dictionary</h1>
          </div>
          <div className="img-container">
            <img src={img1} alt="" />
          </div>
        </div>
      </a>
      <a href="#" className="grid-item-2">
        <div className="grid-item">
          <div className="organization">
            <p>Code</p>
            <h1>Team</h1>
          </div>
          <div className="img-container">
            <img src={img2} alt="" />
          </div>
        </div>
      </a>
      <a
        href="https://savio09.github.io/first-capstone-project/"
        className="grid-item-3"
      >
        <div className="grid-item ">
          <div className="organization">
            <p>UI/UX + Code</p>
            <h1>Team</h1>
          </div>
          <div className="img-container">
            <img src={img3} alt="" />
          </div>
        </div>
      </a>
      <a
        href="https://savio09.github.io/second-capstone-project/"
        className="grid-item-4"
      >
        <div className="grid-item ">
          <div className="organization">
            <p>Code</p>
            <h1>Team</h1>
          </div>
          <div className="img-container">
            <img src={img4} alt="" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Hero;
