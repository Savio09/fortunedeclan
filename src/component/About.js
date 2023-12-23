import Intro from "./Intro";
import img1 from "../images/profile.png";
import Images from "./Images";
const About = ({ title, subtitle }) => {
  return (
    <div className="about">
      <Intro title={"I'm Fortune."} />
      <div className="profile-section">
        <div className="img-container">
          <img src={img1} alt="Fortune Declan" />
          <a href="https://open.spotify.com/track/1goiRWxiG3GTlODrdDZ7NR?si=ca6842974fe84d94">
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
                <p>Jireh by Elevation Worship</p>
              </div>
            </div>
          </a>
        </div>
        <div className="hero-text">
          <h1>
            I'm a Biology and CS Student, studying at Minerva University, where
            I'm a Freshman in San Francisco, California.
          </h1>
          <p>
            Since Grade 9, I’ve been working on honing my programming skill and
            during that time have picked up some skill in front-end development
            and app UI/UX. I have also had the opportunity to give lectures on
            learning foundational programming with Scratch and Python
          </p>
        </div>
      </div>
      <div className="experience-section">
        <div className="songs-bar bar-1">
          <div className="title">
            <h3>Minerva University(Student)</h3>
            <p>Cells & Biology and CS</p>
          </div>
          <h3 className="duration">4 years</h3>
        </div>
        <div className="songs-bar bar-2">
          <div className="title">
            <h3>Teaching</h3>
            <p>Maths, Biology, and Chemistry</p>
          </div>
          <h3 className="duration">6 years</h3>
        </div>
        <div className="songs-bar bar-3">
          <div className="title">
            <h3>Personal Development</h3>
            <p>HTML5, CSS3, JS, React, Python</p>
          </div>
          <h3 className="duration">5+ years</h3>
        </div>
        <div className="songs-bar bar-4">
          <div className="title">
            <h3>Intern @ Side Hustle</h3>
            <p>Team Lead Web Development</p>
          </div>
          <h3 className="duration">4 months</h3>
        </div>
      </div>
      <div className="more-info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="ethos">
        <h1>Ethos</h1>
        <div className="grid">
          <div className="ethic grid-1">
            <h1 className="number">∞</h1>
            <h1 className="name">Kaizen</h1>
            <p>
              In the realm of Kaizen, every step, no matter how small, is a leap
              towards progress. It's the art of continuous improvement, where
              each day offers a chance to be better than the last. It's not
              about grand gestures, but consistent, incremental growth. My
              Journey is a testament to the power of continuous improvement.
            </p>
          </div>
          <div className="ethic grid-2">
            <h1 className="number">↻</h1>
            <h1 className="name">Empathy</h1>
            <p>
              In my UI/UX design and volunteering works. I embody empathy. For
              me, it's about understanding users' needs for intuitive designs
              and acknowledging the struggles of those I help, fostering
              meaningful connections and impactful solutions.
            </p>
          </div>
          <div className="ethic grid-3">
            <h1 className="number">⁜</h1>
            <h1 className="name">Responsibility</h1>
            <p>
              My adherence to the ethic of responsibility speaks volumes about
              my character. Whether it is in collaborating for a group project
              or doing my task personnally, I own up to the actions and
              decisions I make which coupled with my willingness to rectify my
              mistakes, makes me a valuable team member and a respected
              individual.
            </p>
          </div>
          <div className="ethic grid-4">
            <h1 className="number">∲</h1>
            <h1 className="name">Take action</h1>
            <p>
              Taking action with courage is a testament to my strength and
              determination. It highlights my willingness to face challenges
              head-on, step out of my comfort zone, and make tough decisions,
              which not only leads to my personal growth but also inspires
              others to act courageously.
            </p>
          </div>
        </div>
      </div>
      <div className="other-info">
        <p>
          When I started learning how to code, i started with HTML and CSS and i
          remember being really enthralled. It was one conference for teenagers
          that exposed me to the world of coding, but there was something that
          kept me from maxing out my potential and that was the fact that I
          didn't have access to a computer. This prevented me from being an
          outlier, but I persisted. In my mind i would think of a design, then
          draw a wireframe and start to write on paper how the HTML mockup would
          look. If i was priveleged to go into the computer room the following
          day, I would sit at the computer during my free periods, pull out my
          paper and start to use the notepad app to write code. When my peers
          saw the <i>marquee</i> element move, they were thrilled. I was, too.
          It sparked something in me, the zeal to continue.
        </p>
        <p>
          Fast forward today even though I'm not looking to go into Software
          development now, I enjoy coding because it keeps me in that
          psychological state of flow. I also used to sing at my local choir in
          my church in Nigeria. It was a way for me to connect with my mother. I
          sing bass and since when i moved to the U.S to study, I've been
          singing in my room. When people look at me, they think I'm very
          serious, but I think that's what my face exudes not the true me.
        </p>
        <p>
          One of the most interesting moments in my life was in grade 10, when I
          had a 100% perfect score in my chemistry exam. It was exhilarating
          because I did not like chemistry when I started to study it. In the
          tertiary education qualifying education in my Nigeria, I also scored a
          99/100 on the chemistry section of the exam. Some thought it was
          surreal, I didn't. This website design was inspired by Sean Halpin's
          Website. I saw it was the top 1% on one site which i visited to get
          inspiration to build my portfolio website. This person whom I don't
          know motivated me to start learning UI/UX.
        </p>
      </div>
      <div className="grid pg-grid">
        <Images
          className={"grid-item-1"}
          number={Math.floor(Math.random() * 13)}
        />
        <Images
          className={"grid-item-2"}
          number={Math.floor(Math.random() * 13)}
        />
      </div>
    </div>
  );
};

export default About;
