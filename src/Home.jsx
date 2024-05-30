import { useState } from "react"
import { css } from "@emotion/react"

import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {

    return (
        <>
            <header className="header-container">
                <h1>Liam Todd's Portfolio</h1>

                <div className="nav">
                    <h2 className="nav-item">Projects</h2>
                    <h2 className="nav-item">Experience</h2>
                    <h2 className="nav-item">Contact</h2>
                </div>
            </header>
            
            <About />

            <Projects />

            <Resume />
        </>
    )
}