import { useState } from "react"
import { css } from "@emotion/react"

import PortfolioPage from "./components/PortfolioPage";
import Resume from "./components/Resume";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {

    return (
        <>
            <div className="header-container">
                <h1>Liam Todd's Portfolio</h1>

                <div className="header-contact-container">
                    <h2>503-480-5155</h2>
                    <h2>liamd.todd5@gmail.com</h2>
                </div>
            </div>

            <div className="portfolio-page-container">
                <PortfolioPage />
            </div>

            <div className="projects-container">
                <h1>Projects</h1>
                <div className="row-container">
                    <Projects />
                </div>
            </div>

            <div className="resume-page-container">
                <Resume />
            </div>
        </>
    )
}