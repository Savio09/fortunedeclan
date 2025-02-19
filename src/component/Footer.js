import { Link } from "react-router-dom";
const Footer = ({ music }) => {
  return (
    <div className="footer">
      <a href="https://open.spotify.com/track/4dEUfBPs6bydmssKnnqDMV?si=7d70b78b9f0f41fe">
        <div className="songs-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="0 0 496 512"
          >
            <path
              opacity="0.4"
              fill="#000000"
              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
            />
          </svg>
          <div className="song-text">
            <p>On Replay</p>
            <p>{music}</p>
          </div>
        </div>
      </a>
      <div className="links">
        <div className="elsewhere">
          <p>Connect</p>
          <Link to="https://github.com/Savio09">Github</Link>
          <Link to="https://www.linkedin.com/in/declanfortune/">LinkedIn</Link>
          <Link to="https://docs.google.com/document/d/1Fe4FYmQbdZbndRxLqIpJ2jOl0olCUdZGfpm6X_Bl42k/edit?usp=sharing">
            Resume
          </Link>
        </div>
        <div className="contact">
          <p>Message</p>
          <Link to="https://t.me/@Fortune_Declan">Telegram</Link>
          <Link to="mailto:fortune@uni.minerva.edu">Gmail</Link>
          <Link to="#">Chat</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
