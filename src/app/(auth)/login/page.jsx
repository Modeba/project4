"use client";

import { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    console.log("Form Submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <p>please sign in</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default page;