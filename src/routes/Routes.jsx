import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Modules/Auth/page/Login.jsx";
import SignUp from "../Modules/Auth/page/SignUp.jsx";

function RouteApp(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default RouteApp;