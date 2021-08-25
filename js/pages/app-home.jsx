export function AppHome() {
    return (
        <section className="app-home flex flex-column">
            <div className="home-jumbotron">
                <h1>Maíz - All your stuff. One place.</h1>
            </div>
            <div className="features flex flex-row space-evenly">
                <div className="keeper-features">
                    <h3>Keeper</h3>
                    <button className="btn-keeper-features">Learn More</button>
                </div>
                <div className="zmail-features">
                    <h3>Zmail</h3>
                    <button className="btn-keeper-features">Learn More</button>
                </div>
                <div className="mbooks-features">
                    <h3>Mbooks</h3>
                    <button className="btn-keeper-features">Learn More</button>
                </div>
            </div>
        </section>
    )
}