import React, { Component, useState } from "react";

function App() {
  const [userName, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const logName = () => {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  const handleUserNameInput = e => {
    setUsername(e.target.value);
  };
  const handleFirstNameInput = e => {
    setFirstname(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastname(e.target.value);
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="Your Username"
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="Your First Name"
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="Your Last Name"
      />
      <button className="btn btn-large right" onClick={logName}>
        Log Names
      </button>
    </div>
  );
}

export default class MultipleStateProperties extends Component {
  state = {
    userName: "janedoe",
    firstName: "Jane",
    lastName: "Doe"
  };

  handleUserNameInput = e => {
    this.setState({ userName: e.target.value });
  };

  handleFirstNameInput = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameInput = e => {
    this.setState({ lastName: e.target.value });
  };

  logName = () => {
    console.log(this.state.userName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        userName: "janedoe",
        firstName: "Jane",
        lastName: "Doe"
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={this.state.userName}
          placeholder="Your Username"
        />
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          placeholder="Your First Name"
        />
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          placeholder="Your Last Name"
        />
        <button className="" onClick={this.logName}>
          Log Names
        </button>
      </div>
    );
  }
}
