import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Notes from "./component/Notes";
import Photos from "./component/Photos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="swicth">
          <Switch>
            <Route exact path="/home">
              <Home />
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
