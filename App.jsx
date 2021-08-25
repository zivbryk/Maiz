// const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { BookApp } from './pages/BookApp.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './pages/BookDetails.jsx'

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

                    <Route path="/book/:bookId" component={BookDetails} />
                    <Route path="/book" component={BookApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />

                </Switch>
            </main>
        </Router>
    )
}

