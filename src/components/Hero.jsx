import "../../src/App.css";

function Hero() {
    return (
        <>
            <div className="Hero">

                <div className="hero-text">
                    <h1>
                        SkillBridge helps learners bridge the gap between education and industry skills
                    </h1>
                    <p>
                        It focuses on skill development and career readiness
                    </p>
                </div>

                <div className="hero-details">
                    <h2>Bridge the Gap Between Learning and Career</h2>
                    <ol>
                        <li>
                            SkillBridge is a modern online learning platform designed to help
                            students and beginners build practical, job-ready skills.
                        </li>
                        <li>
                            The platform guides learners from education to employment with
                            confidence and real-world knowledge.
                        </li>
                    </ol>
                </div>

                <div className="list-box">
                    <h3>Why SkillBridge?</h3>
                    <ol>
                        <li>Practical and industry-relevant skills</li>
                        <li>Beginner-friendly learning approach</li>
                        <li>Career-oriented mindset</li>
                        <li>Clear path from learning to professional growth</li>
                    </ol>
                </div>

                <div className="hero-cta">
                    <button className="button">Get Started!</button>
                </div>

            </div>
        </>
    );
}

export default Hero;
