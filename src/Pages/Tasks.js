import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import IncaricoLista from "../Components/IncaricoLista";
function Tasks() {
  const { tasks, setTasks } = useContext(AppContext);

  return (
    <>
      <IncaricoLista tasks={tasks} setTasks={setTasks} config="show_all"/>
    </>
  );
}

export default Tasks;
