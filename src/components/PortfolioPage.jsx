export default function PortfolioPage() {

    return (
        <>
            <div className="typing-name">
                <h1>Hello, I'm Liam</h1>
            </div>
            <div className="portfolio-about-container">
                <h1>Who I Am</h1>
                <p>
                    I work in web, mobile, and software development; with a primary
                    specialization in web and mobile dev.
                </p>
                <p>
                    I graduated from Oregon State University
                    in 2024 with a BS in Computer Science. 
                </p>
                <p>
                    While at university, I had the 
                    opportunity to work with <a className="p-link" href="https://sun.museum" target="_blank">Captured Sun</a> 
                    on their flagship product <a className="p-link" href="https://parchment.page" target="_blank">Parchment</a>
                </p>
                <h1>Career Focus</h1>
                <p>
                    I have the skills to work as a free-lance developer, or
                    with a developer team in a startup environment.
                </p>
                <p>
                    Being a developer, I want to create apps that people use to
                    benefit their daily lives.
                </p>
                <p>
                    My greatest asset is my obsession with problem solving!
                </p>
            </div>

            <div className="portfolio-column-container">
                <div className="portfolio-img-container">
                    <img src="/PortraitPhoto.jpg" alt="Portrait" />
                </div>

                <div className="portfolio-links-container">
                    <a href="https://www.linkedin.com/in/liam-todd/" target="_blank"><img className="icon-link" src="/linkedin.png" alt="LinkedIn" />LinkedIn Profile</a>
                    <a href="https://github.com/liamdtodd" target="_blank"><img className="icon-link" src="/github.png" alt="GitHub" />GitHub Profile</a>
                </div>
            </div>
        </>
    )
}