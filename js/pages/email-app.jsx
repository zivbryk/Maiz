import { emailService } from '../apps/mail/services/email-service.js';
import { EmailList } from '../apps/mail/cmps/email-list.jsx'
import { EmailFilter } from '../apps/mail/cmps/mail-filter.jsx'
import { EmailCompose } from '../apps/mail/cmps/email-compose.jsx'
// import composeImg from '../../assets/img/compose.png'
// import { BookDetails } from './BookDetails.jsx'


export class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
        compose: false,
    }

    componentDidMount() {
        this.loadEmails();
       
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails })
            });
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)//2nd arg of setState is a cb function that activates AFTER setState was done 
    }

    onChangeEmailStatus = (emailId, status) => {
        console.log(emailId, status)
        emailService.changeEmailStatus(emailId, status)
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
  
                <section className = "email-app-sidebar">
                <button className="compose-email-btn" onClick = {() => this.onOpenCompose()}>
                <img className = "email-compose-img" src= 'assets/img/email-compose-img.png' />
                     Compose</button>
                <EmailFilter onSetFilter={this.onSetFilter} />
                
                </section>
                {compose && <EmailCompose onCloseCompose = {this.onCloseCompose} onSaveEmail = {this.onSaveEmail}/>}
                <section className="email-app-board">
                <EmailList emails={emails} onChangeEmailStatus = {this.onChangeEmailStatus}/>
                </section>

            </section>
        );
    }
}

