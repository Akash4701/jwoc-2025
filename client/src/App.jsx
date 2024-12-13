import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProject from "./components/AddProject.jsx";
import MenteeRegistration from "./components/MenteeRegistration.jsx";
import MentorRegistration from "./components/MentorRegistration.jsx";
import NavbarDemo from "./components/Navbar.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import LeaderBoard from "./pages/leaderboard.jsx";

import Footer from "./components/Footer.jsx";
import Starvideo from "./components/ui/Starvideo.jsx";
function App() {
    return (
        <div >
            <NavbarDemo />
            <Routes>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/leaderboard" element={<LeaderBoard/>}/>
                <Route path="/Mentor-registration" element={<MentorRegistration/>}/>
                <Route path="/mentee-registration" element={<MenteeRegistration/>}/>
                <Route path="/add-project" element={<AddProject/>}/>
                <Route path="/stars" element={<Starvideo/>}/>
            </Routes>
        <Footer />
        </div>

    );
}

export default App;
