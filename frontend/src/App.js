import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import SignIn from "./Component/SignIn";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import SignUp from "./Component/SignUp";
import Footer from "./Component/Footer";
import Skills from "./Component/Skills";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
