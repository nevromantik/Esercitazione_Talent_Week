import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import IncaricoItems from "../Components/IncaricoItems";
import IncaricoLista from "../Components/IncaricoLista";
function DeletedTasks() {
  const { deletedTasks, setDeletedTasks } = useContext(AppContext);

  const handleDeleteAll = () => {
    setDeletedTasks([]);
  };

  return (
    <>
      {deletedTasks.length > 0 ? (
        <>
          <IncaricoLista
            tasks={deletedTasks}
            setTasks={setDeletedTasks}
            config="delete"
          />
          <button onClick={handleDeleteAll}>Svuota cestino</button>
        </>
      ) : (
        <p>Non hai ancora eliminato nessun task</p>
      )}
    </>
  );
}

export default DeletedTasks;
