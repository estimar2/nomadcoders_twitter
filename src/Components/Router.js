import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
              <span>&copy;{new Date().getFullYear()} song</span>
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
