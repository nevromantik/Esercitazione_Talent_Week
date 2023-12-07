import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import IncaricoItems from "../Components/IncaricoItems";


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
         {completedTasks.map((el) => (
           <IncaricoItems
             key={el.id}
             id={el.id}
             completed={el.completed}
             title={el.title}
             config="show_deleted"
           />
         ))}
       </>
     ) : (
       <p>Non hai ancora completato nessun task</p>
     )}
   </>
  );
}

export default CompletedTasks;
