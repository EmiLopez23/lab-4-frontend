import { Navigate, Route, Routes } from "react-router";
import Login from "@/pages/login";
import Home from "@/pages/home";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
