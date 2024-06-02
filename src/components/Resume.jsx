import { useRef, forwardRef, useImperativeHandle } from "react"

const Resume = forwardRef((props, ref) => {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        scrollIntoView: () => {
            if (localRef.current)
                localRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }));

    return (
        <>
            <div ref={localRef} className="resume-container">
                <div className="capturedsun-card">
                    <div className="resume-left-container">
                        <h1>SWE Intern - Captured Sun</h1>
                        <h4>September 2023 - June 2024</h4>

                        <p>
                            I worked with Captured Sun and the founders on their flagship product, Parchment.
                            Parchment is an app that re-imagines the computer desktop. Giving the user a better
                            space to accomplish their daily tasks.
                        </p>
                        <p>
                            I was in a team of fellow interns and we were assigned several different tasks, 
                            some regarding the front-end and some with the back-end. Some of the biggest tasks completed were:
                            creating space icons for user interaction, and developing a native Windows desktop app for Parchment.
                        </p>
                        <p>
                            In my time with Captured Sun, I learned C#/.NET development and how it relates to the fullstack of the app.
                            Also, I came to understanding of what proper leadership looks like in a software engineering environment, and
                            how to get the best from teammates and the best out of a project.
                        </p>
                    </div>
                    <div className="resume-right-container">
                        <img src="../capturedsun_logo.jpg" alt="Captured Sun" />

                        <div className="resume-bottom-right-container">
                            <h2>Key Concepts</h2>
                            <p>C#/.NET Development</p>
                            <p>Front-end JS Development</p>
                            <p>Team Management</p>
                            <p>Windows UI</p>
                        </div>
                    </div>
                </div>
                <div className="osu-card">
                    <div className="resume-left-container">
                        <h1>CS Student - Oregon State University</h1>
                        <h4>September 2020 - June 2024</h4>

                        <p>
                            I graduated from OSU with a BS in Computer Science with a focus on Web and Mobile Development.
                            In my time at OSU, I took several classes and learned from several different languages like:
                            C/C++, C#, JavaScript, Python, Haskell, HTML/CSS.
                        </p>
                        <p>
                            I also spent time on a multitude of different projects within my courses. To mention some:
                            a secure messaging system, a CLI workout software, NASA Web App, Weather Web App, a mobile app (aka: YouMusic), and much more. 
                        </p>
                        <p>
                            Some of the biggest takeaways from my time at Oregon State came outside of the classroom, however. I learned
                            the importance of discipline and delayed gratification to reach an end goal. Additionally, I've become much better 
                            with time managemnt and arranging my priorities. 
                        </p>
                    </div>
                    <div className="resume-right-container">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Oregon_State_Beavers_logo.svg/1200px-Oregon_State_Beavers_logo.svg.png" alt="OSU" />
                        
                        <div className="resume-bottom-right-container">
                            <h2>Core Classes</h2>
                            <p>Advanced Web Development</p>
                            <p>Mobile Application Development</p>
                            <p>Cloud Application Programming</p>
                            <p>Security</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Resume;