import img1 from "../images/hero-2.png";
import img2 from "../images/hero-1.png";
import img3 from "../images/hero-3.png";
import img4 from "../images/snap.png";
import img5 from "../images/recipe.png";
import img6 from "../images/spotify-preview.png";
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
            <h1>Kida</h1>
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
            <h1>Fylo</h1>
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
            <p>Code Colab</p>
            <h1>Snap</h1>
          </div>
          <div className="img-container">
            <img src={img4} alt="" />
          </div>
        </div>
      </a>
      <a href="https://echo-chef.netlify.app/" className="grid-item-5">
        <div className="grid-item ">
          <div className="organization">
            <p>Code + API</p>
            <h1>Echo Chef</h1>
          </div>
          <div className="img-container">
            <img src={img5} alt="" />
          </div>
        </div>
      </a>
      <a
        href="https://spotify-preview-clone.netlify.app/"
        className="grid-item-6"
      >
        <div className="grid-item ">
          <div className="organization">
            <p>Code + API</p>
            <h1>Spotify Preview</h1>
          </div>
          <div className="img-container">
            <img src={img6} alt="" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Hero;
