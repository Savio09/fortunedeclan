import img1 from "../images/safespace.png";
import img2 from "../images/todo.png";
const Progress = ({ title, subtitle }) => {
  return (
    <div className="progress-section">
      <div className="intro-section">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="grid pg-grid">
        <a
          href="https://www.figma.com/proto/WKTCeJywzv6dNHnD0YcNoc/Todo-App?type=design&node-id=105-60&t=iY7ELtXToAF8K4oH-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=105%3A60&show-proto-sidebar=1&mode=design"
          className="grid-item-1"
        >
          <div className="grid-item">
            <div className="organization">
              <p>UI/UX</p>
              <h1>Personal</h1>
            </div>
            <div className="img-container">
              <img src={img2} alt="" />
            </div>
          </div>
        </a>
        <a
          href="https://safeway-readiness-e96fbb3c78fb.herokuapp.com/"
          className="grid-item-2"
        >
          <div className="grid-item">
            <div className="organization">
              <p>Code + API</p>
              <h1>Personal</h1>
            </div>
            <div className="img-container">
              <img src={img1} alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Progress;
