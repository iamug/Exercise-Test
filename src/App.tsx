import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { Artists, Albums, AlbumPhotos, Tweets } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Artists} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/artists/:userId/albums" exact component={Albums} />
          <Route path="/artists/:userId/albums/:albumId/photos" exact component={AlbumPhotos} />
          <Route path="/artists/:userId/tweets" exact component={Tweets} />
          <Route component={Artists} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
