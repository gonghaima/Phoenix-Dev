import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store";
import Button from "../Button";

const Form = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [formState, handleState] = useState("");

  return (
    <div className="container">
      <h1>Project Phoenix</h1>
      <div>

      <div class="chips chips-initial"></div>
        <div className="chip">
          Tag
          <i className="close material-icons">close</i>
        </div>
      </div>

      <div>
        <input
          name="name"
          placeholder="Enter your name"
          onBlur={e =>
            e.target.value &&
            dispatch({ type: "addFruit", payload: e.target.value })
          }
        />
      </div>
      <br />
      <br />
      <div>
        <Button label="Add Carrot" payload="Carrot" />
        <Button label="Add Banana" payload="Banana" />
        <Button label="Add Apple" payload="Apple" />
      </div>
      <ul>
        {state.fruits &&
          state.fruits.map((fruit, idx) => (
            <li key={idx}>
              {fruit}
              <button
                onClick={() => dispatch({ type: "deleteFruit", payload: idx })}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Form;
