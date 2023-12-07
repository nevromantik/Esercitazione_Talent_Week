import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={styles.container}>
      <span>
        <Link to="/tasks" className={styles.link}>Tasks</Link>
      </span>
      <span>
        <Link to="/deleted" className={styles.link}>Deleted</Link>
      </span>
      <span>
        <Link to="/completed" className={styles.link}>Completed</Link>
      </span>
    </nav>
  );
}

export default Navbar;
