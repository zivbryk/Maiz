const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './js/cmps/app-header.jsx'
import { AppHome } from './js/pages/app-home.jsx'
import { Mbooks } from './js/pages/mbooks.jsx'
import { Keeper } from './js/pages/keeper.jsx'
import { Zmail } from './js/pages/zmail.jsx'


// Simple React Component
export function App() {
    return (
        //book app
        //maill app
        //keep app
        <Router>
            <header>
                <AppHeader />
            </header>
            <main className="app">
                <Switch>

                    <Route path="/mbooks" component={Mbooks} />
                    <Route path="/zmail" component={Zmail} />
                    <Route path="/keeper" component={Keeper} />
                    <Route path="/" component={AppHome} />

                </Switch>
            </main>
        </Router>
    )
}

