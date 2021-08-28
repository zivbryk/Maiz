import { emailService } from '../apps/mail/services/email-service.js';
import { EmailList } from '../apps/mail/cmps/email-list.jsx'
import { EmailFilter } from '../apps/mail/cmps/mail-filter.jsx'
import { EmailCompose } from '../apps/mail/cmps/email-compose.jsx'
import { EmailSearchFilter } from '../apps/mail/cmps/email-search-filter.jsx'
import { EmailReadFilter } from '../apps/mail/cmps/email-read-filter.jsx'
import { EmailSort } from '../apps/mail/cmps/email-sort.jsx'
import { Loading } from '../cmps/Loading.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
        filterByTxt: null,
        filterByRead: null,
        sortBy: null,
        compose: false,
        progress: 0,

    }

    componentDidMount() {
        this.loadEmails();
        this.loadProgress();
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy, this.state.filterByTxt, this.state.filterByRead, this.state.sortBy)
            .then(emails => {
                this.setState({ emails })
            });
    };

    loadProgress = () => {
        emailService.progressEmailRead()
            .then(progress =>

                this.setState({ progress: progress })
            )
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)//2nd arg of setState is a cb function that activates AFTER setState was done 
    }

    onSetTxtFilter = (filterByTxt) => {
        this.setState({ filterByTxt }, this.loadEmails)
    }

    onSetReadFilter = (filterByRead) => {
        this.setState({ filterByRead }, this.loadEmails)
    }

    onDateAlphaSort = (sortBy) => {
        this.setState({ sortBy }, this.loadEmails)
    }

    onChangeEmailStatus = (emailId, status) => {
        console.log(emailId, status)
        emailService.changeEmailStatus(emailId, status)
            .then(
                this.loadEmails
            );
    }

    onChangeEmailReadStatus = (emailId, readStatus) => {
        emailService.changeEmailReadStatus(emailId, readStatus)
            .then(
                this.loadEmails,
                this.loadProgress
            );
    }

    onClearTrash = () => {
        emailService.clearTrash()
            .then(
                this.loadEmails
            );
    }

    onOpenCompose = () => {
        this.setState({ compose: true })
    }

    onCloseCompose = () => {
        this.setState({ compose: false })
    }

    onSaveEmail = (status, to, subject, body) => {
        emailService.addEmail(status, to, subject, body)
            .then(
                this.loadEmails
            );
        this.setState({ compose: false })
    }

    render() {
        const { emails, compose } = this.state
        if (!emails) return <Loading />
        return (

            <section className="email-app">

                <div className="email-select-filters">
                    <EmailSearchFilter onSetTxtFilter={this.onSetTxtFilter} />
                    <div className="email-read-sort-div">
                        <EmailReadFilter onSetReadFilter={this.onSetReadFilter} />
                        <EmailSort onDateAlphaSort={this.onDateAlphaSort} />
                    </div>

                </div>

                <section className="email-app-main">
                    <section className="email-app-sidebar">
                        <button className="compose-email-btn" onClick={() => this.onOpenCompose()}> <span className="fas fa-plus"></span>
                            {/* <img className="email-compose-img" src='assets/img/compose-site-col.png' /> */}
                        </button>
                        <EmailFilter onSetFilter={this.onSetFilter} onClearTrash={this.onClearTrash} progress={this.state.progress} />

                    </section>
                    {compose && <EmailCompose onCloseCompose={this.onCloseCompose} onSaveEmail={this.onSaveEmail} />}
                    <section className="email-app-board">
                        <EmailList emails={emails} onChangeEmailStatus={this.onChangeEmailStatus} onChangeEmailReadStatus={this.onChangeEmailReadStatus} />
                    </section>

                </section>


            </section>
        );
    }
}

