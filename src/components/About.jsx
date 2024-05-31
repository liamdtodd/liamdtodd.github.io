export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="outer-card-container">
                    <div className="bio-tech-container">
                        <div className="bio-container">
                            <h1>About me</h1>
                            <p>
                                Hello, my name is Liam and I'm a Web Developer and Software Engineer.
                                In June '24 I became a college graduate from Oregon State University with a BS 
                                in Computer Science and specializing in Web and Mobile Development.
                            </p>
                            <p>
                                In my time at university, I also worked as a software engineering intern for Captured Sun on their flagship product, Parchment.
                                I also took several courses in software development leading to a multitude of knowledge in different languages and tech stacks.
                                At the moment, I do most of my work with the MERN tech stack.
                            </p>
                            <p>
                                In my free time, I like to work on a list of my own personal projects, go to the gym, run,
                                go out on the lake, and enjoy sports (Go Mariners!).
                            </p>
                        </div>

                        <div className="tech-container">
                            <img src="../node-js.png" alt="node" />
                            <img src="../atom.png" alt="react" />
                            <img src="../js.png" alt="js" />
                            <img src="../mysql.png" alt="mysql" />
                            <img src="../google.png" alt="google cloud" />
                        </div>
                    </div>

                    <div className="img-socials-container">
                        <div className="img-container">
                            <img src="../PortraitPhoto.jpg" alt="portrait" />
                        </div>
                        <div className="socials-container">
                            <a href="https://github.com/liamdtodd" target="_blank"><img src="../github.png" alt="github" /></a>
                            <a href="https://www.linkedin.com/in/liam-todd/" target="_blank"><img src="../linkedin.png" alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}