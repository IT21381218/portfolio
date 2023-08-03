import React from "react";
import "./css/navbar.css";
import {motion} from'framer-motion'


export default function Navbar() {
    return(
        <div>
            <motion.header className="header"
            initial = {{x:1500}}
            animate = {{x:0}} 
            transition={{
                delay:'0.5',
                duration:'0.9'
            }}>     
                <h1 className="my-logo">Ekzetef</h1>

                <nav className="navbar">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </motion.header>
        </div>
    );
}