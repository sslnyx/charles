import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

const Home = lazy(() => import("./pages/home"))
const Register = lazy(() => import("./pages/Register"));
const Thankyou = lazy(() => import("./pages/Thankyou"))
const Location = lazy(() => import("./pages/Location"))
const Homes = lazy(() => import("./pages/homes"));
const Page404 = lazy(() => import("./pages/homes"));
const Built = lazy(() => import("./pages/Built"));
const Team = lazy(() => import("./pages/Team"));
const Gallery = lazy(() => import("./pages/Gallery"));

// import Register from "./pages/Register";
// import Thankyou from "./pages/Thankyou";
// import Location from "./pages/Location";
// import Homes from "./pages/Homes";
// import Page404 from "./pages/Page404"
// import Built from "./pages/Built";
// import Team from "./pages/Team";
// import Gallery from "./pages/Gallery";
import 'tw-elements';
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App useIntersectionObserver={false} />}>
            <Route index element={<Home />} />
            <Route path="location" element={<Location />} />
            <Route path="register" element={<Register />} />
            <Route path="thankyou" element={<Thankyou />} />
            <Route path="homes" element={<Homes />} />
            <Route path="passive-built" element={<Built />} />
            <Route path="our-team" element={<Team />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<Page404 />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Suspense>

  </React.StrictMode>,
  document.getElementById("root")
);
