const { Link, NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {

    render() {

        return (
            <section className="app-header flex space-between align-center">
                <div className="logo-and-user flex space-between align-center">
                    <Link to="/">
                        <div className="header-logo">
                            <img src="assets/img/corn4.png" />
                            Maíz
                        </div>
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

                </nav>
                <Link to="/">
                    <div className="header-grid"><span className="nav-icon fas fa-th"></span></div>
                </Link>


            </section>
        )
    }
}

// export const AppHeader = withRouter(_AppHeader)