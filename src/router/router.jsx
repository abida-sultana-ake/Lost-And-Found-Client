import { createBrowserRouter } from "react-router";
import Layouts from "../rootLayout/Layouts";
import Home from "../pages/Home/Home";
import Lost from "../pages/Lost/Lost";
import ReportLost from "../pages/Lost/ReportLost";
import ReportLostList from "../pages/Lost/ReportLostList";
import Found from "../pages/Found/Found";
import ReportFoundList from "../pages/Found/ReportFoundList";
import ReportFound from "../pages/Found/ReportFound";
import Login from "../components/Login";
import Signup from "../components/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lost",
        element: <Lost />,
      },
      {
        path: "/report-lost",
        element: <ReportLost />,
      },
       {
        path: "/report-lost-list",
        element: <ReportLostList />,
      },
      {
        path: "/found",
        element: <Found />,
      },
      {
        path: "/report-found",
        element: <ReportFound />,
      },
      {
        path: "/report-found-list",
        element: <ReportFoundList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);