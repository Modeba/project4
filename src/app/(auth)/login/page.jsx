"use client";

import { useState } from "react";
import styles from "./page.module.css";

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
    <div className={styles["signin-page"]}>
      <form onSubmit={handleSubmit} className={styles["signin-form"]}>
        <h3 className={styles["signin-title"]}>Sign In</h3>
        <p className={styles["signin-subtitle"]}>please sign in</p>
        <input
          className={styles["signin-input"]}
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        {userNameError && <p className={styles["signin-error"]}>{userNameError}</p>}

        <input
          className={styles["signin-input"]}
          type={isVisible ? 'text' : 'password'}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError ? <p className={styles["signin-error"]}>{passwordError}</p> : null}
        <p className={styles["signin-toggle"]} onClick={handleSeePassword}>See Password</p>
        <button className={styles["signin-button"]} type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default page;