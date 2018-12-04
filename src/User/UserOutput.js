import React from "react";
const userOutput = props => {
  return (
    <div class="card text-white bg-secondary m-5">
      <img class="card-img-top" src="holder.js/100px180/" alt="" />
      <div class="card-body">
        <h4 class="card-title">User Text</h4>
        <p class="card-text">
          {props.userName}'s assignment output paragraph 1.
        </p>
        <p class="card-text">His assignment output paragraph 2.</p>
      </div>
    </div>
  );
};

export default userOutput;
