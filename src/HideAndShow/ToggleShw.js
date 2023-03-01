import React, { useState } from "react";

export default function ToggleShw() {
  const [show, setShow] = useState();
  return (
    <div>
      {show ? " Hide Element Below " : "Show Element Below "}
      <div>
        <button onClick={() => setShow(!show)}>
          {" "}{show ? "Hide" : "Show"}
        </button>

        {show && <div>Toggle Show</div>}
      </div>
    </div>
  );
}
