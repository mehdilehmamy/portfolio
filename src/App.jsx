import React from "react";
import Logo from "./components/Logo";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Introduction from "./components/Introduction";
import { Switch, Route, useLocation } from "react-router-dom";



function App() {
  const location = useLocation();
  return (
    <div>
      <Logo/> 
        <Switch location={location} key={location.key}>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Introduction} />
        </Switch>
    </div>
  );
}

export default App;
