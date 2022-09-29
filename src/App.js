import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Component/details/details";
import Login from "./Component/Login/Login";
import FullDetail from "./Component/fullDetail/FullDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loginform" element={<Login />} />

          <Route path="/loginform/details" element={<Details />} />
          <Route path="/loginform/details/fullDetails" element={<FullDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
