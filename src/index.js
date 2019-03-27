import React from "react";
import ReactDOM from "react-dom";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// Global Store
import Store from "./store";

// Load components
import Form from "./components/Form";

import styles from "./Base.scss";

function App() {
  return (
    <Store>
      <div className="App">
        <Form />
      </div>
    </Store>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
