import React from "react";
import { BrowserRouter as MyRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { myStore } from "./redux/store";
import { HomePage, RepositoriesPage } from "./pages";

function App() {
  return (
    <div>
      <Provider store={myStore}>
        <MyRouter>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search/:keywords" component={RepositoriesPage} />
            <Route>
              <h3>Not found</h3>
            </Route>
          </Switch>
        </MyRouter>
      </Provider>
    </div>
  );
}

export default App;
