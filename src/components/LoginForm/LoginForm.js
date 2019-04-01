import React, { useState } from "react";
import styles from "./LoginForm.scss";
import { useStore } from "../../store/useStore";

export default function LoginForm() {
  const { state, dispatch } = useStore();
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
      <form noValidate onSubmit={()=>dispatch({type: "formSubmit"})}>
        <h1>Sign in</h1>
        <div className="input-field">
          <input
            placeholder="Placeholder"
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
        </div>
        <div className="input-field">
          <input
            type="password"
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
