import { emailService } from '../apps/mail/services/email-service.js';
import { EmailList } from '../apps/mail/cmps/email-list.jsx'
import { EmailFilter } from '../apps/mail/cmps/mail-filter.jsx'
import { EmailCompose } from '../apps/mail/cmps/email-compose.jsx'
import { EmailSearchFilter } from '../apps/mail/cmps/email-search-filter.jsx'
import { EmailReadFilter } from '../apps/mail/cmps/email-read-filter.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
        filterByTxt: null,
        filterByRead: null,
        compose: false,
    }

    componentDidMount() {
        this.loadEmails();
       
    }

    loadEmails = () => {
    
        emailService.query(this.state.filterBy, this.state.filterByTxt, this.state.filterByRead)
            .then(emails => {
                this.setState({ emails })
            });
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)//2nd arg of setState is a cb function that activates AFTER setState was done 
    }

    onSetTxtFilter = (filterByTxt) => {
        this.setState({ filterByTxt }, this.loadEmails)
    }

    onSetReadFilter = (filterByRead) => {
        this.setState({ filterByRead }, this.loadEmails)
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
                this.loadEmails
                );
    }

    onOpenCompose = () => {
        this.setState({compose: true})
    }
    
    onCloseCompose = () => {
        this.setState({compose: false})
    }

    onSaveEmail = (status, to, subject, body) => {
    emailService.addEmail(status, to, subject, body)
    .then(
    this.loadEmails
    );
    this.setState({compose: false})
    }

    render() {
        const { emails, compose } = this.state
        return (
            <section className="email-app">
                <EmailSearchFilter onSetTxtFilter = {this.onSetTxtFilter}/>
               
                <EmailReadFilter onSetReadFilter = {this.onSetReadFilter} />
               
                <section className="email-app-main">
                <section className = "email-app-sidebar">
                <button className="compose-email-btn" onClick = {() => this.onOpenCompose()}>
                <img className = "email-compose-img" src= 'assets/img/compose.png' />
                     Compose</button>
                <EmailFilter onSetFilter={this.onSetFilter} />
                
                </section>
                {compose && <EmailCompose onCloseCompose = {this.onCloseCompose} onSaveEmail = {this.onSaveEmail}/>}
                <section className="email-app-board">
                <EmailList emails={emails} onChangeEmailStatus = {this.onChangeEmailStatus} onChangeEmailReadStatus = {this.onChangeEmailReadStatus}/>
                </section>

                </section>
  

            </section>
        );
    }
}

