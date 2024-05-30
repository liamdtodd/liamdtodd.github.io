export default function Projects() {
    return (
        <>
            <div className="projects-container">
                <div className="project-item">
                    <div className="project-title detail">
                        <h1>NASA Web App</h1>
                    </div>
                    <div className="project-tech detail">
                        <h2>Technology</h2>
                        <img src="../atom.png" alt="react" />
                    </div>
                    <div className="project-summary detail">
                        <h2>Key Concepts</h2>
                        <ul>Fetching data from NASA API</ul>
                        <ul>Styling with Emotion CSS</ul>
                        <ul>React components, hooks, state</ul>
                    </div>
                    <div className="project-link detail">
                        <h2>Link</h2>
                        <a href="https://visionary-mooncake-7b36e3.netlify.app/" target="_blank">Visit Site!</a>
                    </div>
                </div>

                <div className="project-item">
                <div className="project-title detail">
                        <h1>Weather Web App</h1>
                    </div>
                    <div className="project-tech detail">
                        <h2>Technology</h2>
                        <img src="../atom.png" alt="react" />
                    </div>
                    <div className="project-summary detail">
                    <h2>Key Concepts</h2>
                        <ul>Fetching data from OpenWeather API</ul>
                        <ul>Styling with Emotion CSS</ul>
                        <ul>React components, hooks, state</ul>
                    </div>
                    <div className="project-link detail">
                        <h2>Link</h2>
                        <a href="https://lambent-cannoli-594184.netlify.app/" target="_blank">Visit Site!</a>
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-title detail">
                        <h1>RESTful API</h1>
                    </div>
                    <div className="project-tech detail">
                        <h2>Technology</h2>
                        <img src="../node-js.png" alt="node" />
                        <img src="../google.png" alt="google cloud" />
                    </div>
                    <div className="project-summary detail">
                        <h2>Key Concepts</h2>
                        <ul>CRUD implementation for database entities</ul>
                        <ul>GET, POST, PUT, PATCH, DELETE routes</ul>
                        <ul>Success codes: 200, 201, 204</ul>
                        <ul>Failure codes: 400, 401, 403, 404, 406, 415</ul>
                    </div>
                    <div className="project-link detail">
                        <h2>Link</h2>
                        <a href="https://final-toddl.uw.r.appspot.com/users/userInfo">Get API key and test!</a>
                        <a href="../toddl_project.pdf" target="_blank">View API documentation!</a>
                    </div>
                </div>
            </div>
        </>
    )
}