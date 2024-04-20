// import React, { useState } from "react";
import "../cssStyling/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
       <section className="outer-section">
         <nav className="">
        <label class="logo">YOGA</label>
        <ul className="">
            <li><NavLink to="/" style={({ isActive }) => ({color: isActive? "orange": "white",})}>Home</NavLink></li>
            <li><NavLink to="/courses" style={({ isActive }) => ({color: isActive? "orange": "white",})}>Courses</NavLink></li>
            <li><NavLink to="/mycourses" style={({ isActive }) => ({color: isActive? "orange": "white",})}>myCourses</NavLink></li>
            <li><NavLink to="/login" style={({ isActive }) => ({color: isActive? "orange": "white",})}>Login/Sign-Up</NavLink></li>
        </ul>
    </nav>
       </section>
    )
}

export default Navbar;