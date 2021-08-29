export function AppHome() {
    return (
        <section className="app-home flex flex-column">
            <div className="home-jumbotron">
                Maíz - All your stuff. One App.
            </div>
            <div className="features flex flex-row space-evenly">
                <div className="keeper-features">
                    <img className="features-img" src="assets/img/keeper-mockup-1.png" alt="assets/img/maiz-logo.PNG" />
                    <h3>Keeper</h3>
                    <button className="btn-keeper-features">Learn More</button>
                </div>
                <div className="zmail-features">
                    <img className="features-img" src="assets/img/zmail-mockup-1.jpg" alt="assets/img/maiz-logo.PNG" />
                    <h3>Zmail</h3>
                    <button className="btn-keeper-features">Learn More</button>
                </div>
                {/* <div className="mbooks-features">
                    <h3>Mbooks</h3>
                    <button className="btn-keeper-features">Learn More</button>
                </div> */}
            </div>
            <div className="testimonials">
                <img src="assets/img/corn4.png" />
                <span>Join over 10M users and discover the peace of an organized mind.</span>
            </div>

            <div className="our-team">
                <div className="may-almog">
                    <img className="features-img" src="assets/img/may-almog-portrait-modified.png" alt="assets/img/maiz-logo.PNG" />
                    <h3>May Almog</h3>
                    <p>Fullstack developer and Biologist,</p>
                    <p>that enjoys JS and nature's riddles.</p>

                    <div className="socials-may">
                        <a className="github-link fab fa-github" href="https://github.com/mayalmog"></a>
                        <a className="linkdin-link fab fa-linkdin" href="https://www.linkedin.com/in/may-almog-190883161/"></a>

                    </div>
                </div>
                <div className="ziv-bryk">
                    <img className="features-img" src="assets/img/ziv-portrait.png" alt="assets/img/maiz-logo.PNG" />
                    <h3>Ziv Bryk</h3>
                    <p>Fullstack developer and Mechanical Engineer,</p>
                    <p>that enjoys JS and nature's riddles.</p>
                    <div className="socials-ziv">
                        <a className="github-link fab fa-github" href="https://github.com/zivbryk"></a>
                        <a className="linkdin-link fab fa-linkdin" href="https://www.linkedin.com/in/ziv-bryk-887463a8/"></a>
                    </div>
                </div>
            </div>
            <footer>
                <img src="assets/img/corn4.png" />
                <span>Maíz 2021 All rights reserved &copy;</span>
            </footer>
        </section>
    )

}