import React from "react";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from "../Styles/IncaricoItems.module.css";
import { useContext } from "react";
import { AppContext } from "../App";
function IncaricoItems({ title, completed, id, config }) {
  const { setTasks, tasks, setDeletedTasks } = useContext(AppContext);
  const handleDelete = (id) => {
    const updated = tasks.filter((el) => {
      return el.id !== id;
    });

    setTasks(updated);
    const deleted = tasks.filter((el) => {
      return el.id === id;
    });
    setDeletedTasks((prevDeletedTasks) => [...prevDeletedTasks, ...deleted]);
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map((el) => {
      if (el.id === id) {
        return { ...el, completed: !el.completed };
      }
      return el;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textWrap}>
          <p style={{ textDecoration: completed ? "line-through" : "none" }}>
            {title}
          </p>
        </div>

        {config === "show_all" ? (
          <div className={styles.icons}>
            <MdDelete
              onClick={() => {
                handleDelete(id);
              }}
            />
            <IoIosCheckmarkCircle
              onClick={() => {
                handleComplete(id);
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default IncaricoItems;
