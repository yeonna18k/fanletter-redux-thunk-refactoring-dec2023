import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />{" "}
        {/* 홈 화면으로 강제로 리다이렉팅 */}
      </Routes>
    </BrowserRouter>
  );
}
