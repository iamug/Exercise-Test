import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { Sample, Artists, Albums } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Sample} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/artists/:userId/albums" exact component={Albums} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
