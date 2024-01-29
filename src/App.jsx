import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Layout
              bg={{
                mb: "bg-mobile-home",
                tl: "md:bg-tablet-home",
                dt: "xl:bg-desktop-home",
              }}
            >
              <Home />
            </Layout>
          }
        />
        <Route
          path="/destination"
          element={
            <Layout
              bg={{
                mb: "bg-mobile-destination",
                tl: "md:bg-tablet-destination",
                dt: "xl:bg-desktop-destination",
              }}
            >
              <Destination />
            </Layout>
          }
        />
        <Route
          path="/crew"
          element={
            <Layout
              bg={{
                mb: "bg-mobile-crew",
                tl: "md:bg-tablet-crew",
                dt: "xl:bg-desktop-crew",
              }}
            >
              <Crew />
            </Layout>
          }
        />
        <Route
          path="/technology"
          element={
            <Layout
              bg={{
                mb: "bg-mobile-technology",
                tl: "md:bg-tablet-technology",
                dt: "xl:bg-desktop-technology",
              }}
            >
              <Technology />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
