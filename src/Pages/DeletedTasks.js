import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import IncaricoItems from "../Components/IncaricoItems";

function DeletedTasks() {
  const { deletedTasks, setDeletedTasks } = useContext(AppContext);

  const handleDeleteAll = () => {
    setDeletedTasks([]); 
  };

  return (
    <>
      {deletedTasks.length > 0 ? (
        <>
          {deletedTasks.map((el) => (
            <IncaricoItems
              key={el.id}
              id={el.id}
              completed={el.completed}
              title={el.title}
              config="show_deleted"
            />
          ))}
          <button onClick={handleDeleteAll}>Svuota cestino</button>
        </>
      ) : (
        <p>Non hai ancora eliminato nessun task</p>
      )}
    </>
  );
}

export default DeletedTasks;
