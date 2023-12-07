import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import IncaricoForm from "../Components/IncaricoForm";
import { AppContext } from "../App";
import { useContext } from "react";
import styles from "../Styles/Home.module.css";
function Home() {
  const { setTasks } = useContext(AppContext);

  return (
    <>
      <div className={styles.container}>
        <div>
          <Navbar />
        </div>
        <div className={styles.section}>
          <IncaricoForm setTasks={setTasks} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
