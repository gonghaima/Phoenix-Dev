import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
// Import Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navlink
} from "react-router-dom";

// Global Store
import { StoreProvider, useStore } from "./store/useStore";


// Load components
import Form from "./components/Form";
import LoginForm from "./components/LoginForm";

import styles from "./Base.scss";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Switch>

            <Route path="/" exact component={LoginForm} />

          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
