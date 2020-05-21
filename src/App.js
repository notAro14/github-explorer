import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h3>Hello, World.</h3>
        </Route>
        <Route>
          <h3>Not found</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
