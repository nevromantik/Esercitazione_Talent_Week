import "./App.css";
import { useState } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import CompletedTasks from "./Pages/CompletedTasks";
import DeletedTasks from "./Pages/DeletedTasks";
import { createContext } from "react";

export const AppContext = createContext(null);

function App() {
  const allTasks = [
    { id: 1, title: "studiare matematica", completed: false },
    { id: 2, title: "studiare coding", completed: false },
    { id: 3, title: "studiare storia", completed: false },
    { id: 4, title: "studiare italiano", completed: false },
  ];
  const [tasks, setTasks] = useState(allTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "completed",
          element: <CompletedTasks />,
        },
        {
          path: "deleted",
          element: <DeletedTasks />,
        },
      ],
    },
  ]);
  console.log(tasks);
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          tasks,
          setTasks,
          completedTasks,
          setCompletedTasks,
          deletedTasks,
          setDeletedTasks,
        }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
