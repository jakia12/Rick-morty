import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/home/Home";
import CastDetails from "./pages/castDetails/CastDetails";
import Notfound from "./pages/notfound/Notfound";
import AllCasts from "./pages/allCasts/AllCasts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/allCasts" element={<AllCasts />} />
        <Route path="/castDetails" element={<CastDetails />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
