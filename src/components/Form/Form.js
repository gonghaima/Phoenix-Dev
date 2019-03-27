import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../store";


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


const Form = props => {
  const [state, dispatch] = useContext(StoreContext);
  const { classes } = props;
  console.log(classes);
  return (
    <div className="container">
      <h1>Project Phoenix</h1>
      <div>
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
        <button
          onClick={() => dispatch({ type: "addFruit", payload: "Banana" })}
        >
          Add Banana
        </button>

        <button
          onClick={() => dispatch({ type: "addFruit", payload: "Apple" })}
        >
          Add Apple
        </button>
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

export default Form
