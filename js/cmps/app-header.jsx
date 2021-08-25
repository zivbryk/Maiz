const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <section className="app-header flex space-between align-center">
            <div className="logo-and-user flex space-between align-center">
                <Link to="/">
                    <div className="header-logo">Maíz</div>
                </Link>

                <div className="user-logo">
                    <span className="nav-icon fas fa-user"></span>
                </div>
            </div>

            <nav className="header-nav flex">
                <NavLink exact to="/"><span className="nav-icon fas fa-home"></span></NavLink>
                <NavLink to="/keeper"><span className="nav-icon fas fa-sticky-note"></span></NavLink>
                <NavLink to="/zmail"><span className="nav-icon fas fa-envelope"></span></NavLink>
                <NavLink to="/mbooks"><span className="nav-icon fas fa-book-open"></span></NavLink>

                <Link to="/">
                    <div className="header-grid"><span className="nav-icon fas fa-th"></span></div>
                </Link>
            </nav>


        </section>
    )
}