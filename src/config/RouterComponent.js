import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dahboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoutes from "./isProtected";


function RouterComp() {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Login />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dahboard />} />
            </Routes>
        </>
    )
}

export default RouterComp 