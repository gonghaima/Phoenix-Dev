import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store";

export default function Button({payload, label}) {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      <a
        className="waves-effect waves-light btn"
        onClick={() => dispatch({ type: "addFruit", payload: payload })}
      >
        {label}
      </a>
    </>
  );
}
