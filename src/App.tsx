import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { Sample } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Sample} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
