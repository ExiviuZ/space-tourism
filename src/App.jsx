import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Destination, { loader as destinationLoader } from "./pages/Destination";
import Crew, { loader as crewLoader } from "./pages/Crew";
import Technology, { loader as technologyLoader } from "./pages/Technology";
import Layout from "./components/Layout";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout
        bg={{
          mb: "bg-mobile-home",
          tl: "md:bg-tablet-home",
          dt: "xl:bg-desktop-home",
        }}
      >
        <Home />
      </Layout>
    ),
    index: true,
  },
  {
    path: "/destination",
    element: (
      <Layout
        bg={{
          mb: "bg-mobile-destination",
          tl: "md:bg-tablet-destination",
          dt: "xl:bg-desktop-destination",
        }}
      >
        <Destination />
      </Layout>
    ),
    loader: destinationLoader,
  },
  {
    path: "/crew",
    element: (
      <Layout
        bg={{
          mb: "bg-mobile-crew",
          tl: "md:bg-tablet-crew",
          dt: "xl:bg-desktop-crew",
        }}
      >
        <Crew />
      </Layout>
    ),
    loader: crewLoader,
  },
  {
    path: "/technology",
    element: (
      <Layout
        bg={{
          mb: "bg-mobile-technology",
          tl: "md:bg-tablet-technology",
          dt: "xl:bg-desktop-technology",
        }}
      >
        <Technology />
      </Layout>
    ),
    loader: technologyLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
