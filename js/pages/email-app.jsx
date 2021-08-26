import { emailService } from '../apps/mail/services/email-service.js';
import { EmailList } from '../apps/mail/cmps/email-list.jsx'
import { EmailFilter } from '../apps/mail/cmps/mail-filter.jsx'
// import { BookDetails } from './BookDetails.jsx'


export class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
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



    render() {
        const { emails } = this.state
        return (
            <section className="email-app">

                {/* {!selectedBook && <React.Fragment></React.Fragment> */}
                <EmailFilter onSetFilter={this.onSetFilter} />
                <EmailList emails={emails} onChangeEmailStatus = {this.onChangeEmailStatus}/>
                {/* {selectedBook && <BookDetails book={selectedBook} onGoBack={() => this.onSelectBook(null)} />} */}



            </section>
        );
    }
}