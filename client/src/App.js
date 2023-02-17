import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import StartQuiz from "./pages/StartQuiz";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

import { AuthContext } from "./utils/auth";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthContext.Consumer>
          {(login) => {
            return <Header loggedIn={login}/>;
          }}
        </AuthContext.Consumer>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/quiz/:id" component={StartQuiz} />
            <Route exact path="/profile/:username?" component={Profile} />

            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
