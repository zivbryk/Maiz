import { emailService } from '../apps/mail/services/email-service.js';
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookDetails } from './BookDetails.jsx'


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

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadBooks)//2nd arg of setState is a cb function that activates AFTER setState was done 
    // }



    render() {
        const { emails } = this.state
        return (
            <section className="email-app">

                {/* {!selectedBook && <React.Fragment></React.Fragment> */}
                {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
                {/* <EmailsList emails={emails} /> */}
                {JSON.stringify(emails)}
                {/* {selectedBook && <BookDetails book={selectedBook} onGoBack={() => this.onSelectBook(null)} />} */}



            </section>
        );
    }
}