import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "../pages/registration";
import Dashboard from "../pages/dashboard";
import Resetpassword from "../pages/reset_password";
import Searchpage from "../pages/searchpage";
import Table from "../components/table";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<Registration />} />
            <Route path="/" element={<Table />} />
            <Route path="/search-jobs" element={<Searchpage />} />
            <Route path="/resetPassword" element={<Resetpassword />} />
        </Routes>
    )
}