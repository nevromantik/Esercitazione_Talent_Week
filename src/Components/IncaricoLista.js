import React from "react";
import IncaricoItems from "./IncaricoItems";
import styles from '../Styles/IncaricoItems.module.css'

function IncaricoLista({tasks, setTasks, config}) {
  
  return (
    <div className={styles.list}>
      {tasks?.map((task) => {
        return (
          <IncaricoItems
            id={task.id}
            key={task.id}
            title={task.title}
            completed={task.completed}
            setTasks={setTasks}
            config={config}
          />
        );
      })}

      {
        
      }
    </div>
  );
}

export default IncaricoLista;
