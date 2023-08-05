import React from "react";
import Navbar from "./Navbar";
import "./css/home.css";
import Typewriter from 'typewriter-effect';
import {motion} from'framer-motion';
import About from './MyAbout';
import Service from './Service';
import Skill from './skill';
import Projects from './Projects';
import Contact from './Contact';
import Followme from './Followme';
import Tittle from './Tittle';




export default function Home() {
    return(
        <div>
            <Tittle/>
            <Navbar/>
            <div>
                <section className="home">
                    <motion.div className="home-content"
                     initial = {{x:-750}}
                     animate = {{x:0}} 
                     transition={{
                         delay:'0.5',
                         duration:'1'
                     }}>
                        <h1>Hi, I'm Poornaka</h1>
                        <h3>And I'm a 
                            <span>
                            <Typewriter 
                            options={{
                                strings: ['Web Developer', 'Music Producer', 'Youtuber'],
                                autoStart: true,
                                loop: true,
                                }}/>
                            </span>
                        </h3>
                        <br/>
                        <p>I am a self-driven undergraduate student studying Information Technology with a 
                            passion for discovering and experimenting with the latest technology. I have a 
                            strong interest in both frontend and backend development. I am a responsible team 
                            player who can easily adjust to any difficult circumstances. I have the ability to 
                            operate well both independently and in a collaborative setting. I can stay on task 
                            and meet deadlines even when under pressure.
                        </p>
                        <br/>
                        <div className="dowload-btn">
                            <a href= "poornaka.pdf" download >Download CV</a>
                        </div>
                    </motion.div>
                    <div className="my-photo">
                        <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1689144547/Picsart_23-07-12_12-17-36-744_scuuwb.jpg" alt=""/>
                    </div>
                </section>
            <About/>
            <Service/>
            <Skill/>
            <Projects/>
            <Contact/>
            <Followme/>
            
            </div>
        </div>
    );
}