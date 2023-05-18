import { CssBaseline } from "@mui/material";

import Main from "./components/Main/Main";

import Navbar from "./components/Navbar/Navbar";

import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);
function App() {
  return <></>;
}

export default App;
