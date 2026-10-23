"use client";

import { useState } from "react";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log("Form Submitted");
  };

  const handleSeePassword = () => {
    setIsVisible(!isVisible);
  }

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
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <p onClick={handleSeePassword}>See Password</p>
      </form>
    </div>
  );
};

export default page;