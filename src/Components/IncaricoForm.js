import React, { useState } from "react";
import uniqid from "uniqid";
import styles from "../Styles/IncaricoForm.module.css";
import { useLocation } from "react-router-dom";

function IncaricoForm({ setTasks, tasks }) {
  const location = useLocation();
  console.log(location.pathname);
  const [title, setTitle] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uniqid(),
      title: title,
      completed: false,
    };
    setTasks((prev) => {
      return [...prev, newTask];
    });
  };

  return (
    <>
      {location.pathname === "/tasks" ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="inserisci titolo"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={styles.input}
          />
          <button className={styles.button}>Aggiungi</button>
        </form>
      ) : null}
    </>
  );
}

export default IncaricoForm;
