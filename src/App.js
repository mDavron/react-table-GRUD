import React, { Component } from "react";
import data from "./data";
import "./App.css";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="table-container">
        <Table data={data} />
      </div>
    );
  }
}

export default App;
