import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages";
import About from "./components/pages/about";
import Services from "./components/pages/services";
import Contact from "./components/pages/contact";
import SignIn from "./components/pages/signin";
import SignUp from "./components/pages/signup";
import ForgotPassword from "./components/pages/forgotPassword";
import PracticeTests from "./components/pages/practiceTests";
import RemedialCourses from "./components/pages/remedialCourses";
import FormWrapper from "../src/components/formTest/FormWrapper";
import Social from "../src/components/pages/social";
import LanguageWorkshops from "../src/components/pages/languageWorkshops";
import CareerCouseling from "../src/components/pages/careerCounseling";
import AuthState from "../src/context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/social" component={Social} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/practiceTests" component={PracticeTests} />
          <Route path="/remedial" component={RemedialCourses} />
          <Route path="/language" component={LanguageWorkshops} />
          <Route path="/onboarding2" component={FormWrapper} />
          <Route path="/career" component={CareerCouseling} />
        </Switch>
        <Footer />
      </Router>
    </AuthState>
  );
};

export default App;
