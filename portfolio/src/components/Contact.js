import React from "react";

export default function Contact() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Mitchell Riley</h5>
          <h6 class="card-subtitle mb-2 text-muted">Online Business Card</h6>
          <p class="card-text">
            Contact me at rileymitchellk@gmail.com
          </p>
          <a href="https://github.com/Pherenzia" class="card-link">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
