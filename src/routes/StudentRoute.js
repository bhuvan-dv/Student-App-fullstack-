import React from "react";
import { useRoutes } from "react-router-dom";
import CreateStudent from "../Components/CreateStudent";
import DeleteStudent from "../Components/DeleteStudent";
import EditStudent from "../Components/EditStudent";
import Home from "../Components/Home";
import ViewStudent from "../Components/ViewStudent";
const StudentRoute = () => {
  let way = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/createstudent",
      element: <CreateStudent />,
    },
    {
      path: "/editstudent/:id",
      element: <EditStudent />,
    },
    {
      path: "/viewstudent/:id",
      element: <ViewStudent />,
    },
    {
      path: "/deletestudent/:id",
      element: <DeleteStudent />,
    },
  ]);
  return way;
};
export default StudentRoute;
