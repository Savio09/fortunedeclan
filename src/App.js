import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Notes from "./component/Notes";
import Photos from "./component/Photos";
import Progress from "./component/Progress";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="swicth">
          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route path="/about">
              <About
                title={
                  "If you enjoy biology and love attending hackathons or enjoy coding as a whole, hit me up, so we can collaborate."
                }
                subtitle={
                  " My interest in neuroscience, combined with my passion for coding and hackathons, presents a unique intersection of biology and technology. This blend of disciplines allows me to explore the intricacies of the human brain and apply computational methods to unravel its mysteries. My portfolio is a testament to this journey, inviting like-minded enthusiasts to collaborate and innovate at the crossroads of neuroscience and coding. Together, let's aim to push the boundaries of what's possible in both fields."
                }
              />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer music={"Been so Good by Elevation Worship"} />
      </div>
    </Router>
  );
}

export default App;
