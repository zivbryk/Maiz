const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './js/cmps/app-header.jsx'
import { AppHome } from './js/pages/app-home.jsx'
import { Mbooks } from './js/pages/mbooks.jsx'
import { NoteApp } from './js/pages/note-app.jsx'
import { EmailApp } from './js/pages/email-app.jsx'
import { EmailDetails } from './js/apps/mail/pages/mail-details.jsx'
import { NoteDetails } from './js/apps/keep/cmps/note-details.jsx'


// Simple React Component
export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main className="app">
                <Switch>
                <Route path="/zmail/:emailId" component={EmailDetails} />

                    <Route exact path="/keeper/:noteId" component={NoteDetails} />
                    <Route path="/mbooks" component={Mbooks} />
                    <Route path="/zmail" component={EmailApp} />
                    <Route path="/keeper" component={NoteApp} />
                    <Route path="/" component={AppHome} />
                </Switch>
            </main>
        </Router>
    )
}

