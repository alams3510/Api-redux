import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    console.log("props", this.props);

    return (
      <div className="App">
        <h1>Click button for fetch the API</h1>
        <button onClick={this.props.call}>Click Me</button>
        <div>{this.props.display}</div>
      </div>
    );
  }
}
export default App;
