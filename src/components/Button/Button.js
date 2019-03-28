import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store";

export default function Button(props) {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      <a
        className="waves-effect waves-light btn"
        onClick={() => dispatch({ type: "addFruit", payload: props.payload })}
      >
        {props.label}
      </a>
    </>
  );
}
