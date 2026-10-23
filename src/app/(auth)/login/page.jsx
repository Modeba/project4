"use client";

import { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    console.log("Form Submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <h3>Sign In</h3>
      <p>please sign in</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
};

export default page;