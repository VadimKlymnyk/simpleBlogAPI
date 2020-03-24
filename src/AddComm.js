import React, { useEffect, useState } from "react";

function AddComm({ onCreate }) {
  const [value, setValue] = useState("");

  function Add(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={{ margin: "1rem" }} onSubmit={Add}>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddComm;
