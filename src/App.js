import "./styles.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

export default function App() {
  let location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  );
}
