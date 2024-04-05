import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import User from "./Components/User";
import About from "./Components/About";
import UserDetails from "./Components/UserDetails";

function App() {
    return (
        <>
            <nav className="px-10 py-3 bg-amber-400 flex justify-center items-start gap-10">
                <Link className="text-lg font-semibold font-mono" to="/">
                    Home
                </Link>
                <Link className="text-lg font-semibold font-mono" to="/user">
                    User
                </Link>
                <Link className="text-lg font-semibold font-mono" to="/about">
                    About
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/:id" element={<UserDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
