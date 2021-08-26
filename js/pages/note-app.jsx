import { noteService } from '../apps/keep/services/note-service.js'
import { NoteList } from '../apps/keep/cmps/note-list.jsx'
import { SearchFilter } from '../cmps/search-filter.jsx'

export class NoteApp extends React.Component {
    state = {
        notes: [],
        filterBy: null,
    }

    componentDidMount() {
        // const urlSrcPrm = new URLSearchParams(this.props.location.search)
        // const res = urlSrcPrm.get('q')
        // for (const [key, val] of urlSrcPrm) {
        //   console.log('key: ', key);
        //   console.log('val: ', val);
        // }
        console.log('note mounted');
        this.loadNotes();
    }

    loadNotes = () => {
        console.log('notes loaded')
        noteService.query(this.state.filterBy).then((notes) => {
            // eventBusService.emit('notes-count', notes.length)
            this.setState({ notes });
        });


    }

    // onToggleTodo //send all the way to noteTodo!!!!

    render() {
        const { notes } = this.state
        return (
            <section className="note-app flex flex-column align-center">
                <h1>Keeper</h1>
                <SearchFilter />
                <NoteList notes={notes} />
                {/* <CarList cars={this.carsToDisplay} onSelectCar={this.onSelectCar} /> */}
            </section>
        )
    }
}