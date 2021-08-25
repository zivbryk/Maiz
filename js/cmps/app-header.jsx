const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <section className="app-header">
            <Link to="/">
                <div className="header-logo">Maíz</div>
            </Link>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/keeper">Keeper</NavLink>
                <NavLink to="/zmail">Zmail</NavLink>
                <NavLink to="/mbooks">Mbooks</NavLink>
            </nav>

        </section>
    )
}