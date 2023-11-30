import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Signup from "pages/Signup";
import Profile from "Components/Profile";
import LogedRoute from "../LogedRoute";

export default function Router() {
  const login = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LogedRoute component={<Home />} authenticated={login} />}
        />
        <Route
          path="/detail/:id"
          element={<LogedRoute component={<Detail />} authenticated={login} />}
        />
        <Route
          path="/detail/:id"
          element={<LogedRoute component={<Profile />} authenticated={login} />}
        />
        <Route path="/login" element={<Signup />} />
        <Route path="*" element={<Navigate replace to="/" />} />{" "}
        {/* 홈 화면으로 강제로 리다이렉팅 */}
      </Routes>
    </BrowserRouter>
  );
}
