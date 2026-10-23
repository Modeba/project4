"use client";

import { useState } from "react";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserNameError (null);
    setPasswordError (null);

    if(username.length === 0) {
      return setUserNameError("Username is empty")
    }
    if(password.length === 0) {
      return setPasswordError("Password is empty")
    }
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
      {userNameError && <p>{userNameError}</p>}

      <input
        type={isVisible ? 'text' : 'password'}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      {passwordError ? <p>{passwordError}</p> : null}
      <p onClick={handleSeePassword}>See Password</p>
      <button type = "submit">Sign in</button>
      
      </form>
    </div>
  );
};

export default page;