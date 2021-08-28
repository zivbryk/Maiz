const { Link, NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {
    state = {
        menuOpen: false,
    }

    toggleMenuOpen = () => {
        const { menuOpen } = this.state
        this.setState(prevState => ({ ...prevState, ['menuOpen']: !menuOpen }))

    }


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
                <div className="header-menu flex flex-row">

                    {this.state.menuOpen && <nav className="header-nav flex">
                        <NavLink exact to="/"><span className="nav-icon fas fa-home"></span></NavLink>
                        <NavLink to="/keeper"><span className="nav-icon fas fa-sticky-note"></span></NavLink>
                        <NavLink to="/zmail"><span className="nav-icon fas fa-envelope"></span></NavLink>
                        {/* <NavLink to="/mbooks"><span className="nav-icon fas fa-book-open"></span></NavLink> */}

                    </nav>}

                    <div className="header-grid" onClick={this.toggleMenuOpen}><span className="nav-icon fas fa-th"></span></div>
                </div>



            </section>
        )
    }
}

// export const AppHeader = withRouter(_AppHeader)