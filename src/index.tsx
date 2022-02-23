import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "exo-ui";
import App from "./App";

ReactDOM.render(
  <Layout color="dark">
    <Router>
      <App />
    </Router>
  </Layout>,
  document.getElementById("root")
);
