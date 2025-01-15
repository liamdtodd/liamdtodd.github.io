import { useRef } from "react";

import About from "./components/About";
import './styles/home.css';

export default function Home() {

    return (
        <>
            <div className="header-container" id="home">
                <h1>Hello, my name is Liam</h1>
            </div>

            <About />
        </>
    )
}