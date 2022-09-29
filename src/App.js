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
          <Route path="/" element={<Login />} />

          <Route path="details" element={<Details />} />
          <Route path="details/fullDetails" element={<FullDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
