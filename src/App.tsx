import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import History from "./pages/History";
import Launches from "./pages/Launches";
import Rockets from "./pages/Rockets";
import RocketDetail from "./components/RocketDetail";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/history", element: <History /> },
        { path: "/launches", element: <Launches /> },
        { path: "/rockets", element: <Rockets /> },
        { path: "/rockets/:rocketId", element: <RocketDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
