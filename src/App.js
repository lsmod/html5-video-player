import React, { Component } from "react";
import "./App.css";
import Player from "./components/Player"

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>Simple Video Player</h3>
        <Player width="420" height="240" src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4"/>
      </div>
    );
  }
}

export default App;
