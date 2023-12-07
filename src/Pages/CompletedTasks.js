import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import IncaricoLista from "../Components/IncaricoLista";

function CompletedTasks() {
  const {
    tasks,
    setCompletedTasks,
    completedTasks,
    
  } = useContext(AppContext);

  useEffect(() => {
    const addCompleted = tasks.filter((el) => el.completed === true);
   
    setCompletedTasks(addCompleted);
  }, [tasks, setCompletedTasks]);

  return (
   
    <>
    {completedTasks.length > 0 ? (
      <>
        <IncaricoLista
          tasks={completedTasks}
          setTasks={setCompletedTasks}
          config="completed"
        />
      </>
    ) : (
      <p>Non hai ancora completato nessun task</p>
    )}
  </>
  );
}

export default CompletedTasks;
