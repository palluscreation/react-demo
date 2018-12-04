import React, { Component } from "react";
import "./App.css";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
class App extends Component {
  state = {
    userName: "Admin"
  };
  changeUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };
  render() {
    return (
      <div className="container App">
        <h1>My first react assignment.</h1>
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Sanjay" />
        <UserInput change={this.changeUserName} />
      </div>
    );
  }
}

export default App;
