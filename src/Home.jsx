import { useRef } from "react";

import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
    const projectsRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <header className="header-container">
                <h1>Liam Todd's Portfolio</h1>

                <nav className="nav">
                    <h2 className="nav-item" onClick={() => {
                        if (projectsRef.current)
                            projectsRef.current.scrollIntoView({ behavior: "smooth" })
                    }}>Projects</h2>
                    <h2 className="nav-item" onClick={() => {
                        if (resumeRef.current)
                            resumeRef.current.scrollIntoView({ behavior: "smooth" });      
                    }}>Experience</h2>
                    <h2 className="nav-item" onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>Contact</h2>
                </nav>
            </header>
            
            <About />

            <Projects ref={projectsRef} />

            <Resume ref={resumeRef} />

            <footer ref={contactRef} className="footer-container">
                <div className="name-container">
                    <h1>Liam Todd</h1>
                    <p>Web Developer & Software Engineer</p>
                </div>

                <div className="contacts">
                    <h3 className="contact-item">(503) 480-5155</h3>
                    <h3 className="contact-item">liamd.todd5@gmail.com</h3>
                </div>
            </footer>
        </>
    )
}