import './FAQ.css';

function FAQ(){

    return(
        <div className="about-me_container">
            <div className="about-me">
                <h1 className="about-me_header">Meet the Developer</h1>
                <div className="my-photo__container">
                    <img src="https://avatars.githubusercontent.com/u/64106105?s=400&u=f537834802f6cc9966c0a3e8d62d3b44434710fd&v=4" alt="my-photo" />
                </div>
                <p className="about-me_paragraph">Hi! My name is Safiya Cain and I created this application as a resource for hobby/craft sewers interested in purchasing sewing patterns, fabrics, and even a tailor made outfit. As a hobby sewer myself, I thought it could be interesting if their was a website that would take your measurements and just make the item for the user and this is my aim with this application. Sew Me uses an Express backend and a React / Redux frontend. Feel free to create an account or click the Demo Login button to check out some of my app features.</p>
                <p>Check out my Career Links and contact me for any questions.</p>
            </div>
            <div className="career-links">
                <a className="gh-link" href="https://github.com/Scain3">
                    <i class="fab fa-github fa-3x"></i>
                </a>
                <a className="ln-link" href="https://www.linkedin.com/in/safiya-cain-25327356/">
                    <i class="fab fa-linkedin fa-3x"></i>
                </a>
                <a className="al-link" href="https://angel.co/u/safiya-cain">
                    <i class="fab fa-angellist fa-3x"></i>
                </a>
            </div>
        </div>
    )
}

export default FAQ;
