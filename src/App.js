import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <h3>Not found</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
