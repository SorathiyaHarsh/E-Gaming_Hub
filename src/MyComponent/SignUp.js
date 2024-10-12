import React from "react";
import "./Login.css";

export default function SignUp() {
  return (
    <>
      <div className="container-fluid">
        <div className="login-details">
          <form>
            <div className="heading-login">
              <h1>Welcome!</h1>
              <p>Please SignUp</p>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="forgot-password-link">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
