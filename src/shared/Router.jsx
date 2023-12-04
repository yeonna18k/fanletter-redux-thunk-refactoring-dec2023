import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Profile from "Components/Profile";
import { useState } from "react";

export default function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />{" "}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}

        {/* 홈 화면으로 강제로 리다이렉팅 */}
      </Routes>
    </BrowserRouter>
  );
}
