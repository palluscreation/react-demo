import React from "react";
import "./UserInput.css";
const userInput = props => {
  return (
    <div class="form-group">
      <label for="userName">Enter new username </label>
      <input
        type="text"
        class="form-control UserInput"
        name="userName"
        id="userName"
        aria-describedby="helpId"
        placeholder="type username"
        onChange={props.change}
        value={props.userName}
      />
      <small id="helpId" class="form-text text-muted">
        Typed name will get reflected in place of "Admin"
      </small>
    </div>
  );
};

export default userInput;
