import React, { useState } from "react";
import styles from "./LoginForm.scss";
import { useStore } from "../../store/useStore";

export default function LoginForm() {
  const { state, dispatch } = useStore();

  const handleSubmit = e => {
    e.preventDefault();
    state.user.username && state.user.password
      ? console.log("entered correctly")
      : console.log("not all fields entered");
  };
  return (
    <div className="container loginForm">
      <div className="row">
        <div className="col s12">{JSON.stringify(state.user)}</div>
      </div>
      <div className="logo">
        <img
          src="https://my.woolworthsrewards.com.au/sf/phoenix/phoenix-new.png"
          width="250"
        />
      </div>
      <form onSubmit={handleSubmit} noValidate >
        <h1>Sign in</h1>
        <div className="input-field">
          <input
            placeholder="Username"
            type="text"
            className="validate"
            value={state.user.username}
            onChange={e =>
              dispatch({
                type: "updateUsername",
                payload: { username: e.target.value }
              })
            }
            
          />
          <label htmlFor="first_name">First Name</label>
          {state.user.errors == 0 && <span className="red-text">Please enter username</span>}
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            className="validate"

            value={state.user.password}
            onChange={e =>
              dispatch({
                type: "updatePassword",
                payload: { password: e.target.value }
              })
            }
          />
          <label htmlFor="password">Password</label>
          <span className="helper-text" data-error="Please enter a password"></span>
        </div>
        <button
          className="btn btn-large waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>

        <br />
        <div>
          <a className="red-text text-darken-2" href="#">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
}
