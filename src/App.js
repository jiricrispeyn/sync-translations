import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import MyEditor from "./components/my-editor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-editor">
          <div className="App-editor-left">
            <div className="App-editor-title">Source</div>
            <MyEditor />
          </div>
          <div className="App-editor-right">
            <div className="App-editor-title">Destination</div>
            <MyEditor className="App-editor-inner" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
