export default function Projects() {
    return (
        <>
            <div className="api-container project-container">
                <h1>RESTful API</h1>
                <img src="https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg" alt="REST diagram" />
                <p>
                    I constructed different enpoints for two different entities that had access
                    to 5 different HTTP requests: GET, POST, PUT, PATCH, and DELETE.
                </p>
                <p>
                    Additionally, I implemented user authentication via JWTs and Auth0.
                </p>

                <h4>Tech used:</h4>
                <p>NodeJS</p>
                <p>Google Cloud Platform</p>

                <h2><a href="https://github.com/liamdtodd/RESTful_API" target="_blank">GitHub Repo</a></h2>
            </div>

            <div className="nasa-container project-container">
                <h1>Web App w/ NASA API</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="NASA logo" />
                <p>With my partner, we created an app that used various different parts of NASA's API.</p>
                <p>
                    We made several different calls to the API, with user input as paramters, and displayed
                    the data in a clean, appealing way.
                </p>

                
                <h4>Tech used:</h4>
                <p>React</p>
                <p>Emotion Styling</p>
                <p>Tanstack Query API calls</p>

                <h2><a href="https://github.com/osu-cs494-w24/final-project-team-23" target="_blank">GitHub Repo</a></h2>
            </div>

            <div className="crud-container project-container">
                <h1>Database Management - CRUD</h1>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmw39OaGeIiR2_yKnSCUFX3ypmYqm9ML9zfqCJOC_HGYKvMRgozYve-DWBnH6Vp5F_JF0IKrCESW-Jj7Agx78K9EW3y9FfBsHgpK72zDYQQaWjFG70m47eHJi44SuqGl3Sj92lKs4Uwtgr/s1600/crud.jpg" alt="CRUD" />
                <p>With my partner, we created a CRUD-based app that focused on database management and manipulation</p>
                <p>
                    In order to do so, we had a simple UI that would take input and data from
                    the user to make corresponding database queries.
                </p>

                <h4>Tech used:</h4>
                <p>NodeJS</p>
                <p>MySQL</p>
                <h2><a href="https://github.com/liamdtodd/Fitness-Web-App" target="_blank">GitHub Repo</a></h2>
            </div>
        </>
    )
}