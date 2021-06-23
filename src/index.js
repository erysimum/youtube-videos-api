import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
class index extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
